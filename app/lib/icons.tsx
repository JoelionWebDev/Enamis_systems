import { Zap, Sun, Camera, ShieldCheck, Flame, Home, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap, Sun, Camera, ShieldCheck, Flame, Home,
};

export function getIcon(name: string, className = "w-5 h-5") {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
