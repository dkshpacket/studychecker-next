"use client";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./ui/button";
import { Loader2 } from "lucide-react";

export const SubmitButton: React.FC<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> = (props) => {
  const { pending } = useFormStatus();

  return (
    <Button {...props} disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {props.children}
    </Button>
  );
};
