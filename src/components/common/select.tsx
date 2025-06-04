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
        <span className="font-bold text-tiny lg:text-xs text-gray-600 uppercase tracking-wide">
          {label}
        </span>
      )}
      <Select>
        <SelectTrigger className="h-14 w-full data-[size=default]:h-10">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
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
