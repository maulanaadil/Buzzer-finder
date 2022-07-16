import React, { ComponentPropsWithoutRef, ReactNode } from "react";

export type Props = ComponentPropsWithoutRef<"button"> & {
  type?: "submit" | "reset" | "button";
  variant: ButtonTypes;
  children: ReactNode;
  onClick?: () => void;
  as?: React.ElementType<any>;
  className?: string;
};

export type ButtonTypes = "primary" | "secondary";
