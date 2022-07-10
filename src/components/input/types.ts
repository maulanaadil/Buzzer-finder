import { ComponentPropsWithoutRef } from 'react';

export type Props = ComponentPropsWithoutRef<'input'> & {
  type: 'text' | 'url' | 'number';
  placeholder: string;
  name: string;
};
