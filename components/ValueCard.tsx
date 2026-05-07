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
    <div className="liquid-glass group h-full p-6 transition-transform duration-100 hover:translate-x-0.5 hover:translate-y-0.5">
      <div className={`mb-5 inline-flex border-2 border-black p-3 ${iconBg} ${iconColor}`}>
        <Icon size={22} />
      </div>
      <h3 className="font-display text-lg font-bold text-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#1f1f1f]">{description}</p>
    </div>
  );
}
