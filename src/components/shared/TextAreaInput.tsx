import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "../ui/field";

interface TextAreaProps {
  placeholder?: string;
  label?: string;
  value?: string;
  optional?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
}

const TextAreaInput = ({
  placeholder,
  label,
  optional,
  error,
  value,
  onChange,
  onBlur,
}: TextAreaProps) => {
  return (
    <Field className="grid gap-y-1">
      <div className="flex justify-between items-center">
        <FieldLabel
          className="font-medium text-deep-gray leading-5"
          htmlFor={label}
        >
          {label}
        </FieldLabel>
        {optional && (
          <span className="text-sm font-medium text-placeholder">optional</span>
        )}
      </div>

      <Textarea placeholder={placeholder}  value={value} 
      className="h-30 py-6 "         
        onChange={onChange}    
        onBlur={onBlur}  />
      {error && <p className="text-red-500 text-xs mt-1 ">{error}</p>}
    </Field>
  );
};

export default TextAreaInput;
