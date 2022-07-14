import { ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<"div"> & {
  src?: string;
  username: string;
  followers?: number;
  linkTo?: string;
};
