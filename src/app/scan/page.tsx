"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaCheck,
  FaSearch,
  FaExclamationTriangle,
  FaMemory,
  FaNetworkWired,
  FaLock,
  FaWindows,
} from "react-icons/fa";

const THREATS = [
  { type: "Virus",      name: "Trojan.Win32.Emotet",            zone: "C:\\Windows\\System32\\svchost.exe" },
  { type: "Malware",    name: "Adware.BrowseFox.A",             zone: "C:\\Users\\Public\\AppData\\Roaming\\bfx" },
  { type: "Brèche",     name: "CVE-2024-21412 Exploit",         zone: "Registre système — HKLM\\SOFTWARE" },
  { type: "Ransomware", name: "LockBit.3.0.variant",            zone: "C:\\ProgramData\\LBT\\enc_payload.dll" },
  { type: "Spyware",    name: "SpyAgent.KeyLogger",             zone: "C:\\Users\\AppData\\Local\\spy32.exe" },
  { type: "Rootkit",    name: "Rustock.MBR.Injector",           zone: "MBR / Secteur de démarrage" },
  { type: "Brèche",     name: "MS17-010 EternalBlue",           zone: "Services réseau — SMBv1 port 445" },
  { type: "Virus",      name: "Worm.AutoRun.INF",               zone: "Périphériques amovibles — autorun.inf" },
  { type: "Malware",    name: "PUP.Optional.SearchBundler",     zone: "C:\\Program Files (x86)\\SearchAssist" },
  { type: "Spyware",    name: "Banker.Trojan.Zeus",             zone: "Navigateurs — extension injectée" },
  { type: "Rootkit",    name: "ZeroAccess.rootkit",             zone: "C:\\Windows\\assembly\\GAC_32\\Desktop.ini" },
  { type: "Virus",      name: "Backdoor.Win32.Gh0st",           zone: "C:\\Users\\AppData\\Roaming\\gh0st.exe" },
  { type: "Brèche",     name: "PrintNightmare CVE-2021-34527",  zone: "Spouleur impression Windows" },
  { type: "Malware",    name: "CoinMiner.Monero.Agent",         zone: "C:\\ProgramData\\miner\\xmrig.exe" },
  { type: "Spyware",    name: "Stealer.RedLine",                zone: "C:\\Users\\AppData\\Local\\Temp\\rl.bin" },
  { type: "Accès",      name: "Connexion RDP non autorisée",    zone: "Session ouverte depuis 185.220.101.47" },
  { type: "Brèche",     name: "Fichier de mots de passe exposé", zone: "C:\\Users\\Documents\\credentials.txt" },
  { type: "Accès",      name: "Tentatives de connexion × 47",   zone: "Authentification Admin échouée — bruteforce" },
  { type: "Brèche",     name: "Exfiltration de données",        zone: "C:\\Users\\Desktop\\clients_2024.xlsx" },
  { type: "Accès",      name: "Escalade de privilèges",         zone: "Compte local élevé en SYSTEM" },
  { type: "Spyware",    name: "Keylogger actif détecté",        zone: "C:\\Users\\AppData\\Local\\kl.exe" },
  { type: "Brèche",     name: "Accès partage réseau non auth.", zone: "Partage réseau \\\\SERVEUR\\RH" },
  { type: "Ransomware", name: "Chiffrement en cours — fichiers", zone: "C:\\Users\\Shared\\Compta\\*.docx — 847 fichiers" },
  { type: "Accès",      name: "VPN suspect — nœud Tor détecté", zone: "Connexion Tor depuis 45.142.212.100:9001" },
  { type: "Malware",    name: "Macro Office malveillante",       zone: "C:\\Users\\Downloads\\facture_04_2026.xlsm" },
  { type: "Brèche",     name: "Certificat SSL expiré",          zone: "Protocole TLS 1.0 actif sur port 443" },
  { type: "Accès",      name: "Dump base de données",           zone: "mysql_dump.sql — transfert FTP sortant détecté" },
  { type: "Virus",      name: "Dropper.Win32.Agent.BTR",        zone: "C:\\Users\\Downloads\\setup_crack.exe" },
  { type: "Spyware",    name: "Capture écran toutes les 30s",   zone: "Processus caché — PID 4872 — scrcap.dll" },
  { type: "Brèche",     name: "Email de phishing exécuté",      zone: "Pièce jointe exécutée — C:\\Temp\\facture.exe" },
];

const SCAN_PATHS = [
  "C:\\Windows\\System32\\ntdll.dll",
  "C:\\Windows\\System32\\kernel32.dll",
  "C:\\Users\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu",
  "C:\\Program Files\\Common Files\\microsoft shared",
  "C:\\Windows\\SysWOW64\\msvcp140.dll",
  "C:\\Users\\AppData\\Local\\Temp",
  "C:\\Windows\\Prefetch",
  "C:\\ProgramData\\Microsoft\\Windows Defender",
  "C:\\Windows\\System32\\drivers\\etc\\hosts",
  "C:\\Users\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles",
  "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run",
  "HKCU\\SOFTWARE\\Microsoft\\Internet Explorer\\Main",
  "C:\\Windows\\System32\\Tasks",
  "C:\\Boot\\BCD",
  "MBR — Secteur 0",
];

const CPU_VALUES   = [12, 18, 23, 15, 29, 34, 21, 17, 26, 31, 19, 24];
const RAM_VALUES   = [41, 44, 47, 43, 46, 50, 48, 45, 42, 49, 51, 46];
const NET_IN_VALS  = [0.2, 0.4, 1.1, 0.3, 0.8, 2.1, 0.6, 1.4, 0.3, 0.9];
const NET_OUT_VALS = [0.1, 0.3, 0.2, 0.5, 0.1, 0.4, 0.2, 0.6, 0.1, 0.3];

type Status = "scanning" | "detected" | "cleaning" | "cleaned";
interface ThreatItem { threat: (typeof THREATS)[0]; status: Status; id: number; }

export default function ScanPage() {
  const [items, setItems] = useState<ThreatItem[]>([
    { threat: THREATS[0],  status: "cleaned",  id: -1  },
    { threat: THREATS[15], status: "cleaned",  id: -2  },
    { threat: THREATS[3],  status: "cleaned",  id: -3  },
    { threat: THREATS[20], status: "cleaned",  id: -4  },
    { threat: THREATS[7],  status: "cleaned",  id: -5  },
    { threat: THREATS[24], status: "cleaned",  id: -6  },
    { threat: THREATS[1],  status: "cleaned",  id: -7  },
    { threat: THREATS[18], status: "cleaning", id: -8  },
    { threat: THREATS[10], status: "cleaning", id: -9  },
    { threat: THREATS[22], status: "detected", id: -10 },
    { threat: THREATS[5],  status: "detected", id: -11 },
    { threat: THREATS[2],  status: "scanning", id: -12 },
  ]);
  const [progress, setProgress]         = useState(18);
  const [cleaned, setCleaned]           = useState(7);
  const [detected, setDetected]         = useState(12);
  const [currentFile, setCurrentFile]   = useState(SCAN_PATHS[0]);
  const [filesScanned, setFilesScanned] = useState(51_204);
  const [cpu, setCpu]     = useState(21);
  const [ram, setRam]     = useState(44);
  const [netIn, setNetIn]   = useState(0.4);
  const [netOut, setNetOut] = useState(0.2);
  const [elapsed, setElapsed] = useState(0);
  const [startTime]           = useState(() => Date.now());

  const uidRef  = useRef(0);
  const stepRef = useRef(12); // repart après les 12 éléments pré-chargés

  // Horloge session
  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(t);
  }, [startTime]);

  useEffect(() => {
    // Fichier scanné toutes les 10s
    const fileInterval = setInterval(() => {
      setCurrentFile(SCAN_PATHS[Math.floor(Math.random() * SCAN_PATHS.length)]);
      setFilesScanned((n) => (n + 1 >= 284_317 ? 0 : n + 1));
    }, 10_000);

    // Progression +1% toutes les 5 minutes
    const progressInterval = setInterval(() => {
      setProgress((p) => (p + 1 >= 100 ? 0 : p + 1));
    }, 5 * 60 * 1000);

    // Stats système toutes les 4s
    const sysInterval = setInterval(() => {
      setCpu(CPU_VALUES[Math.floor(Math.random() * CPU_VALUES.length)]);
      setRam(RAM_VALUES[Math.floor(Math.random() * RAM_VALUES.length)]);
      setNetIn(NET_IN_VALS[Math.floor(Math.random() * NET_IN_VALS.length)]);
      setNetOut(NET_OUT_VALS[Math.floor(Math.random() * NET_OUT_VALS.length)]);
    }, 4_000);

    // Nouvelle menace toutes les 5 minutes
    const threatInterval = setInterval(() => {
      const threat = THREATS[stepRef.current % THREATS.length];
      const id = uidRef.current++;
      stepRef.current++;
      setDetected((d) => d + 1);
      setItems((prev) => [{ threat, status: "scanning", id }, ...prev.slice(0, 11)]);
      setTimeout(() => {
        setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status: "detected" } : i)));
        setTimeout(() => {
          setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status: "cleaning" } : i)));
          setTimeout(() => {
            setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status: "cleaned" } : i)));
            setCleaned((c) => c + 1);
          }, 100_000);
        }, 100_000);
      }, 100_000);
    }, 2 * 60 * 1000);

    return () => { clearInterval(fileInterval); clearInterval(progressInterval); clearInterval(sysInterval); clearInterval(threatInterval); };
  }, []);

  const fmt = (s: number) => {
    const h  = Math.floor(s / 3600).toString().padStart(2, "0");
    const m  = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
    const sc = (s % 60).toString().padStart(2, "0");
    return `${h}:${m}:${sc}`;
  };

  const statusIcon = (status: Status) => {
    if (status === "scanning") return <FaSearch className="text-blue-400 animate-pulse" />;
    if (status === "detected") return <FaExclamationTriangle className="text-red-500" />;
    if (status === "cleaning") return <FaSearch className="text-yellow-400 animate-spin" />;
    return <FaCheck className="text-green-400" />;
  };

  const statusLabel = (status: Status) => {
    if (status === "scanning") return <span className="text-blue-400 text-[10px]">Analyse…</span>;
    if (status === "detected") return <span className="text-red-500 text-[10px] font-semibold">Détecté</span>;
    if (status === "cleaning") return <span className="text-yellow-400 text-[10px]">Nettoyage…</span>;
    return <span className="text-green-400 text-[10px] font-semibold">Supprimé ✓</span>;
  };

  const rowBg = (status: Status) => {
    if (status === "detected") return "bg-red-500/8";
    if (status === "cleaning") return "bg-yellow-500/5";
    if (status === "cleaned")  return "bg-green-500/5";
    return "";
  };

  return (
    <main className="relative flex flex-col overflow-hidden" style={{ height: "100dvh" }}>
      {/* Arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-green-900/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* Layout principal — remplit tout l'écran sous la navbar */}
      <div className="relative flex flex-1 min-h-0 w-full max-w-6xl mx-auto px-3 sm:px-5 pt-[68px] pb-2 gap-2.5">

        {/* ── Colonne gauche ── */}
        <div className="flex flex-col gap-2 w-60 shrink-0">

          {/* Titre + badge */}
          <div className="shrink-0 pt-1">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-1 rounded-full
                            bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20
                            text-[var(--color-primary-light)] text-[10px] font-medium">
              <FaShieldAlt className="text-[var(--color-primary)] text-[9px]" />
              <span>Protection active</span>
            </div>
            <h1 className="text-base font-bold text-white leading-tight">
              Analyse{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
                en cours
              </span>
            </h1>
            <p className="text-[9px] text-[var(--color-muted)]">Protection par le Serveur </p>
          </div>

          {/* 4 compteurs */}
          <div className="grid grid-cols-2 gap-1.5 shrink-0">
            {[
              { label: "Détectées",  value: detected,                             color: "text-red-500" },
              { label: "Supprimées", value: cleaned,                              color: "text-green-400" },
              { label: "Fichiers",   value: filesScanned.toLocaleString("fr-FR"), color: "text-white" },
              { label: "Durée",      value: fmt(elapsed),                         color: "text-yellow-400" },
            ].map((s) => (
              <div key={s.label} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-2 text-center">
                <div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[9px] text-[var(--color-muted)]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Progression */}
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg px-2.5 py-2 shrink-0">
            <div className="flex justify-between text-[9px] text-[var(--color-muted)] mb-1">
              <span>Progression</span>
              <span className="text-white font-semibold">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden mb-1.5">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="flex items-center gap-1">
              <FaSearch className="text-[var(--color-primary)] text-[8px] shrink-0 animate-pulse" />
              <span className="text-[9px] text-[var(--color-muted)] font-mono truncate">{currentFile}</span>
            </div>
          </div>

          {/* Ressources : CPU + RAM */}
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg px-2.5 py-2 shrink-0">
            <div className="text-[9px] text-[var(--color-muted)] uppercase tracking-widest font-medium mb-1.5">
              Ressources
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                { label: "CPU", value: cpu, color: "bg-[var(--color-primary)]", icon: <FaWindows className="text-[8px]" /> },
                { label: "RAM", value: ram, color: "bg-purple-500",             icon: <FaMemory   className="text-[8px]" /> },
              ].map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-[9px] text-[var(--color-muted)] mb-0.5">
                    <span className="flex items-center gap-1">{r.icon} {r.label}</span>
                    <span className="text-white font-semibold">{r.value}%</span>
                  </div>
                  <div className="h-1 bg-[var(--color-border)] rounded-full overflow-hidden">
                    <motion.div className={`h-full ${r.color} rounded-full`} animate={{ width: `${r.value}%` }} transition={{ duration: 1 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Réseau + Sécurité côte à côte */}
          <div className="grid grid-cols-2 gap-1.5 shrink-0">
            {/* Réseau */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg px-2 py-1.5">
              <div className="flex items-center gap-1 text-[9px] text-[var(--color-muted)] uppercase tracking-wider font-medium mb-1">
                <FaNetworkWired className="text-[var(--color-primary)] text-[8px]" /> Réseau
              </div>
              <div className="space-y-0.5">
                <div>
                  <div className="text-[8px] text-[var(--color-muted)]">↓ Entrant</div>
                  <div className="text-[10px] font-semibold text-green-400">{netIn.toFixed(1)} Mo/s</div>
                </div>
                <div>
                  <div className="text-[8px] text-[var(--color-muted)]">↑ Sortant</div>
                  <div className="text-[10px] font-semibold text-[var(--color-primary)]">{netOut.toFixed(1)} Mo/s</div>
                </div>
              </div>
            </div>

            {/* Sécurité */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg px-2 py-1.5">
              <div className="flex items-center gap-1 text-[9px] text-[var(--color-muted)] uppercase tracking-wider font-medium mb-1">
                <FaLock className="text-green-400 text-[8px]" /> Sécurité
              </div>
              {[
                { label: "Pare-feu",    ok: true  },
                { label: "Mises à jour",ok: true  },
                { label: "Chiffrement", ok: true  },
                { label: "Acc. distants",ok: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-[8px] text-[var(--color-muted)] truncate">{item.label}</span>
                  {item.ok
                    ? <span className="text-[8px] text-green-400 font-bold ml-1">✓</span>
                    : <span className="text-[8px] text-orange-400 font-bold ml-1 animate-pulse">…</span>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Colonne droite : journal ── */}
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden flex flex-col flex-1 min-w-0 min-h-0 mt-1">

          {/* En-tête */}
          <div className="px-4 py-2 border-b border-[var(--color-border)] flex items-center justify-between shrink-0">
            <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-widest font-medium">
              Outil de suppression de logiciel malveillant
            </span>
            <span className="text-[10px] text-orange-400 font-semibold animate-pulse">● LIVE</span>
          </div>

          {/* En-têtes colonnes */}
          <div className="grid grid-cols-[18px_1fr_76px_68px] gap-2 px-4 py-1 border-b border-[var(--color-border)] shrink-0">
            <div />
            <div className="text-[8px] text-[var(--color-muted)] uppercase tracking-wider">Menace / Chemin</div>
            <div className="text-[8px] text-[var(--color-muted)] uppercase tracking-wider text-center">Type</div>
            <div className="text-[8px] text-[var(--color-muted)] uppercase tracking-wider text-right">Statut</div>
          </div>

          {/* Liste des menaces */}
          <ul className="divide-y divide-[var(--color-border)] overflow-y-auto flex-1">
            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`grid grid-cols-[18px_1fr_76px_68px] gap-2 items-center px-4 py-2 ${rowBg(item.status)}`}
                >
                  <div className="flex justify-center">{statusIcon(item.status)}</div>
                  <div className="min-w-0">
                    <div className="text-white text-xs font-mono truncate">{item.threat.name}</div>
                    <div className="text-[var(--color-muted)] text-[9px] truncate">{item.threat.zone}</div>
                  </div>
                  <div className="flex justify-center">
                    <span className="text-[9px] text-[var(--color-muted)] bg-[var(--color-border)] px-1.5 py-0.5 rounded whitespace-nowrap">
                      {item.threat.type}
                    </span>
                  </div>
                  <div className="flex justify-end">{statusLabel(item.status)}</div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {/* Pied du journal */}
          <div className="px-4 py-2 border-t border-[var(--color-border)] shrink-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] text-green-400 font-semibold">
                {cleaned} supprimée{cleaned > 1 ? "s" : ""} / {detected} détectée{detected > 1 ? "s" : ""}
              </span>
            </div>
            <p className="text-xs text-[var(--color-muted)] italic border-t border-[var(--color-border)] pt-1.5">
              Une fois cette opération terminée, un rapport sur les logiciels malveillants détectés et supprimés vous sera proposé par le serveur.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
