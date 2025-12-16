import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  placeholder?: string;
}

const SearchInput = ({
  label,
  error,
  placeholder,
  ...props
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(value);
  };
  return (
    <div
      className={`grid w-full max-w-[291px] items-center gap-1 border border-[#D0D5DD] rounded-[6px] pl-3`}
    >
      <Label className="font-bold leading-6" htmlFor={label}>
        {label}
      </Label>

      <div className="flex relative items-center">
        <Search size={16} className=""/>
        <Input
          className={`${error ? "border-danger focus:ring-0!" : "border-0! border-none outline-none shadow-none ring-0 focus:ring-0! placeholder:text-[#98a2b3]"} `}
          onChange={handleChange}
          type="text"
          placeholder={placeholder}
          {...props}
        /> 
      </div>
    </div>
  );
};

export default SearchInput;
