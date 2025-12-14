import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

interface TextAreaProps {
  placeholder?: string;
  label?: string;
    optional?: boolean;
}

const TextAreaInput = ({ placeholder, label , optional}: TextAreaProps) => {
  return (
    <div className="grid gap-y-1">
      <div className="flex justify-between items-center">
        <Label className="font-medium text-deep-gray leading-5" htmlFor={label}>
          {label}
        </Label>
        {optional && (
          <Label className="text-sm font-medium text-placeholder">
            optional
          </Label>
        )}
      </div>

      <Textarea placeholder={placeholder} />
    </div>
  );
};

export default TextAreaInput;
