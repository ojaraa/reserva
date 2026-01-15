import type { JSX } from "react";

interface StatsProps {
    label: string;
    value: string;
    subtext: string;
    icon: JSX.Element;
    iconColor: string;
    iconBg: string;
}
const DashboardStatsCard = ( { label, value, subtext, icon, iconColor, iconBg }: StatsProps) => {
  return (
    <div className=" p-6 space-y-2 bg-white rounded-2xl border border-slate-100  shadow-sm hover:shadow-md transition-shadow">
      <div
        className={`p-2.5 w-fit rounded-xl ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <p className="text-sm text-slate-500 font-medium ">{label}</p>
      <div className="space-y-0.5-">
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <p className="text-xs font-medium text-slate-400">{subtext}</p>
      </div>
    </div>
  );
};

export default DashboardStatsCard;
