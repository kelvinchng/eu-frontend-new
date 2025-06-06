import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  label?: string;
  placeholder: string;
}

export function Dropdown({ label, options, placeholder }: DropdownProps) {
  return (
    <div className="flex flex-col gap-1 w-full h-full flex-1">
      {label && (
        <span className="font-extrabold text-tiny lg:text-xs xl:text-md 2xl:text-lg text-gray-600 uppercase tracking-wide font-onest">
          {label}
        </span>
      )}
      <Select>
        <SelectTrigger className="h-14 w-full data-[size=default]:h-10 lg:data-[placeholder]:text-md 2xl:data-[placeholder]:text-lg border-none shadow-none">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="">
          {options?.map((option) => (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
