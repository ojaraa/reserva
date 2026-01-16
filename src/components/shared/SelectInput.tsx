import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Asterisk } from "lucide-react";

export type Option = {
  value: string;
  label: string;
};
interface SelectInputProps {
  label?: string;
  optional?: boolean;
  placeholder?: string;
  options?: Option[];
  value?: string;
  error?: string;
  isCompulsory?: boolean;
  onChange?: (value: string) => void;
}

const SelectInput = ({
  label,
  optional,
  placeholder,
  options,
  error,
  value,
  isCompulsory,
  onChange,
}: SelectInputProps) => {
  return (
    <div className="grid gap-y-1">
      <div className="flex justify-between items-center">
        <Label className="font-medium text-deep-gray leading-5" htmlFor={label}>
          {label}
          {isCompulsory && <Asterisk className="text-red-400" size={10} />}
        </Label>
        {optional && (
          <Label className="text-sm font-medium text-placeholder">
            optional
          </Label>
        )}
      </div>

      <Select value={value} onValueChange={onChange} key={value}>
        <SelectTrigger className="w-full py-[22px]">
          <SelectValue placeholder={placeholder} className="h-12"/>
        </SelectTrigger>
        <SelectContent className="">
          {options?.length === 0 ? (
            <div className="text-xs min-w-32 max-w-[300px] p-1 text-placeholder text-center py-2">
              No options available
            </div>
          ) : (
            options?.map((option, index) => (
              <SelectGroup key={index}>
                <SelectItem value={option.value}>{option.label}</SelectItem>
              </SelectGroup>
            ))
          )}
        </SelectContent>
      </Select>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default SelectInput;
