import { ChevronRight } from "lucide-react";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

interface QuickActionsProps {
  icon: JSX.Element;
  label: string;
  description: string;
  primaryColor: string;
  onClick?: () => void;
  href?: string;
}
const QuickActions = ({
  icon,
  label,
  description,
  primaryColor,
  onClick,
  href,
}: QuickActionsProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) onClick();
    if (href) navigate(href);
  };
  return (
    <button
      className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all text-left group"
      onClick={handleClick}
    >
      <div
        className={`${primaryColor} w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-slate-50 group-hover:bg-white group-hover:shadow-sm`}
        //   style={{ color: primaryColor }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
          {label}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">{description}</p>
      </div>
      <ChevronRight
        size={14}
        className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all"
      />
    </button>
  );
};

export default QuickActions;
