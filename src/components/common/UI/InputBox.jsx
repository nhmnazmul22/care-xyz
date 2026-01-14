import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const InputBox = ({
  label = "",
  Icon,
  type = "text",
  name = "",
  placeholder = "",
  error = null,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        )}
        <Input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`pl-11 h-12.5`}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
};

export default InputBox;
