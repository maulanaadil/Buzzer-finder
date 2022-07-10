import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type Props = ComponentPropsWithoutRef<'button'> & {
  type: 'submit' | 'reset' | 'button';
  variant: ButtonTypes;
  children: ReactNode;
  onClick?: () => void;
};

export type ButtonTypes = 'primary' | 'secondary';
