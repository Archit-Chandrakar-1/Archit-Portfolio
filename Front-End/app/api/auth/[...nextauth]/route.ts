import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Allow only your email
      if (user.email === "archit1chandrakar@gmail.com") {
        return true;
      }
      return false; // Block everyone else
    },
  },
});

export { handler as GET, handler as POST };