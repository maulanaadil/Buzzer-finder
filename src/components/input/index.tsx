import React from 'react';

import styles from './index.module.css';
import { Props } from './types';

export default function Input({
  type,
  placeholder,
  name,
  ...otherprops
}: Props) {
  return (
    <input
      type={type}
      className={styles.search}
      name={name}
      placeholder={placeholder}
      {...otherprops}
    />
  );
}
