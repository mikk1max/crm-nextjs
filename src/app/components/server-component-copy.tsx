import React from 'react';
import { headers } from 'next/headers';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentProps) {
  console.log('Server Component Copy');
  console.log(headers());
  return (
    <div>
      <p>Server Component Copy</p>
      {children}
    </div>
  );
}
