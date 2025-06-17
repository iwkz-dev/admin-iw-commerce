'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import shopImage from '../../../public/shop.jpg';
import { Spinner } from '../ui/spinner';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  const [error, setError] = useState<string | null>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    if (res?.error) {
      setError('Invalid email or password');
      setLoading(false);
    } else if (res?.ok) {
      setError(null);
      router.push(res.url || '/'); // Use callbackUrl here if stored
      setLoading(false);
    } else {
      setError('Invalid email or password');
      setLoading(false);
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="md:min-h-[500px] grid p-0 md:grid-cols-2">
          <form className="p-6 md:py-20 md:px-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 pb-4">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your IW-Commerce account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input name="email" id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </a> */}
                </div>
                <Input name="password" id="password" type="password" required />
                {error && <span className="text-destructive text-sm">{error}</span>}
              </div>
              <Button type="submit" className="w-full">
                {loading ? <Spinner className="text-white" /> : 'Login'}
              </Button>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src={shopImage}
              alt="Image"
              fill
              priority
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
