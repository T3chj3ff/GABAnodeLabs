'use client';

import React, { useEffect } from 'react';

export default function AxeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
      // @ts-expect-error - TS may not see the types immediately
      import('@axe-core/react').then((axe) => {
        import('react-dom').then((ReactDOM) => {
          axe.default(React, ReactDOM, 1000);
        });
      });
    }
  }, []);

  return <>{children}</>;
}
