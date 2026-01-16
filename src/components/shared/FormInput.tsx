import { useState } from "react";
import { Input } from "../ui/input";
// import { Label } from "../ui/label";
import { Asterisk, Eye, EyeOff } from "lucide-react";
import { Field, FieldLabel } from "../ui/field";
// import type { FieldError } from "react-hook-form";

interface InputProps {
  label?: string;
  optional?: boolean;
  type: string;
  placeholder?: string;
  dataInvalid?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
 error?: string;
 isCompulsory?: boolean;
}

const FormInput = ({
  label,
  optional,
  type = "text",
  placeholder,
  dataInvalid,
  value,
  error,
  isCompulsory,
  onChange,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Field className="grid gap-y-1.5" data-invalid={dataInvalid}>
      <div className="flex justify-between items-center">
        <FieldLabel
          className="font-medium text-deep-gray leading-5"

          htmlFor={label}
        >
          {label}
          {isCompulsory && (
          <Asterisk className="text-red-400" size={10}/>

          )}
        </FieldLabel>
        {optional && (
          <span className="text-sm font-medium text-placeholder">optional</span>
        )}
      </div>

      <div className="w-full relative">
        <Input
          value={value}
          onChange={onChange}
          type={type === "password" && showPassword ? "text" : type}
          className="bg-white h-12 border-[#E4E4E7] border pl-4"
          placeholder={placeholder}
        />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
       
        {type === "password" && (
          <button
            className="bg-transparent! p-0! absolute right-2 top-1/2 -translate-y-1/2 outline-none"
            type="button"
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <Eye className="text-[#667185] size-4 cursor-pointer" />
            ) : (
              <EyeOff className="text-[#667185] size-4 cursor-pointer" />
            )}
          </button>
        )}
      </div>

    
    </Field>
  );
};

export default FormInput;
