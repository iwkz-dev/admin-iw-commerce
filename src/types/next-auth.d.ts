declare module 'next-auth' {
  interface Session {
    user: User;
    accessToken: string;
    refreshToken: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    accessToken: string;
    refreshToken: string;
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    id: string;
    name: string;
    email: string;
    role: string;
    accessToken: string;
    refreshToken: string;
  }
}
