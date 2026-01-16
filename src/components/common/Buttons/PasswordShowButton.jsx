import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

const PasswordShowButton = ({ isShowPassword, setIsShowPassword }) => {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setIsShowPassword(!isShowPassword)}
      className="absolute right-2 top-7.5"
    >
      {isShowPassword ? (
        <Eye className="w-4 h-4" />
      ) : (
        <EyeOff className="w-4 h-4" />
      )}
    </Button>
  );
};

export default PasswordShowButton;
