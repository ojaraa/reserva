import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  label?: string;
  optional?: boolean;
  type: string;
  placeholder?: string;
}

const FormInput = ({ label, optional, type = "text" , placeholder}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="grid gap-y-1">
      <div className="flex justify-between items-center">
        <Label className="font-medium text-deep-gray leading-5" htmlFor={label}>
          {label}
        </Label>
        {optional && <Label className="text-sm font-medium text-placeholder">optional</Label>}
      </div>

      <div className="w-full relative">
        <Input type={type === "password" && showPassword ? "text" : type} className="bg-white h-9 border-[#E4E4E7] border" placeholder={placeholder} />
        {type === "password" && (
          <button
            className="bg-transparent! p-0! absolute right-2 top-1/2 -translate-y-1/2 outline-none"
            type="button"
            onClick={handleTogglePassword}
          >
            {showPassword ? <Eye className="text-[#667185] size-4 cursor-pointer"/> : <EyeOff className="text-[#667185] size-4 cursor-pointer"/>}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
