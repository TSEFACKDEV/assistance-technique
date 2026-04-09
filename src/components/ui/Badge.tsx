interface BadgeProps {
  children: React.ReactNode;
  color?: "blue" | "orange" | "green";
}

export default function Badge({ children, color = "blue" }: BadgeProps) {
  const colors = {
    blue:   "bg-blue-500/10 text-blue-400 border-blue-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    green:  "bg-green-500/10 text-green-400 border-green-500/20",
  };
  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${colors[color]}`}>
      {children}
    </span>
  );
}