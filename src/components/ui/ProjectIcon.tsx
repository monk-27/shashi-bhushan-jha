import { Server, Smartphone, Monitor, Briefcase, Shield, Globe, Layout, Zap, LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Server,
  Smartphone,
  Monitor,
  Briefcase,
  Shield,
  Globe,
  Layout,
  Zap,
};

export default function ProjectIcon({ name, size = 40, className = "" }: { name: string; size?: number; className?: string }) {
  const Icon = ICON_MAP[name] ?? Server;
  return <Icon size={size} className={className} />;
}
