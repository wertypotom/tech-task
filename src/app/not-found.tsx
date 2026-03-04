import Link from 'next/link';
import { ErrorMessage } from '@/shared/ui';

export default function NotFound() {
  return (
    <div style={{ padding: '4rem 1rem' }}>
      <ErrorMessage
        title="Page Not Found"
        message="The page you are looking for doesn't exist or has been moved."
      />
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link
          href="/"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
