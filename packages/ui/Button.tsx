import React from 'react';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => <button>{children}</button>;