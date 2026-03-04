'use client';

import { useEffect } from 'react';
import { ErrorMessage } from '@/shared/ui';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: '4rem 1rem' }}>
      <ErrorMessage
        title="Something went wrong!"
        message="An unexpected rendering error occurred in the application."
        onReset={reset}
      />
    </div>
  );
}
