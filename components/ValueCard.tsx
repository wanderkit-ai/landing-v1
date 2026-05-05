import type { LucideIcon } from "lucide-react";

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg?: string;
  iconColor?: string;
};

export function ValueCard({
  icon: Icon,
  title,
  description,
  iconBg = "bg-blue-50",
  iconColor = "text-blue-600",
}: ValueCardProps) {
  return (
    <div className="liquid-glass group h-full rounded-[1.5rem] p-6 transition-shadow duration-300 hover:shadow-xl">
      <div className={`mb-5 inline-flex rounded-2xl p-3 ${iconBg} ${iconColor}`}>
        <Icon size={22} />
      </div>
      <h3 className="font-display text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
