import { LoginForm } from '@/components/forms/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
