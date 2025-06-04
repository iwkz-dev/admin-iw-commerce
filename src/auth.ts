import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { AuthUser } from './types/user.types';

//export for server components
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<AuthUser | null> {
        const res = await fetch(`${process.env.BASE_API_URL}/api/admin/auth/sign-in`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });

        if (!res.ok) return null;
        const { data } = await res.json();

        if (data?.session?.accessToken) {
          return {
            id: data.session.user.id,
            email: data.session.user.email,
            name: data.session.user.name,
            role: data.session.user.role,
            accessToken: data.session.accessToken,
            refreshToken: data.session.refreshToken,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // On first login, "user" will be defined
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach custom values to session
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
        role: token.role as string,
        accessToken: token.accessToken as string,
        refreshToken: token.refreshToken as string,
        emailVerified: null,
      };
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },
  jwt: { maxAge: 60 * 60 },
  session: { strategy: 'jwt', maxAge: 60 * 60 },
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
});
