import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const SelectBox = ({
  triggerLabel = "",
  placeholder = "",
  keyToChange = "",
  value = "",
  onValueChange = () => {},
  options = [],
  disabled = false,
}) => {
  return (
    <div>
      <Label className="block text-sm font-medium text-foreground mb-2">
        {triggerLabel}
      </Label>
      <Select
        value={value}
        onValueChange={(value) => onValueChange(keyToChange, value)}
        disabled={disabled}
      >
        <SelectTrigger className="w-full py-5">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="border-slate-300 dark:border-neutral-900">
            {options.length === 0 && (
                <SelectItem>
                    {triggerLabel} not found!
                </SelectItem>
            )}

          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectBox;
