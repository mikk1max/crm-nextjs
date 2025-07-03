'use client';

import React from 'react';
import ServerComponentCopy from '@/app/components/server-component-copy';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('Client Component');
  return (
    <div>
      <p>Client Component</p>
      {children}
    </div>
  );
}
