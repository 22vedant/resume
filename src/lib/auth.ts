import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";

const {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
} = process.env;

export const NextAuthOptions = {
  providers: [
    Discord({
      clientId: DISCORD_CLIENT_ID as string,
      clientSecret: DISCORD_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: GITHUB_CLIENT_ID as string,
      clientSecret: GITHUB_CLIENT_SECRET as string,
    }),
    // Discord,
  ],
  // pages: {
  //   signIn: "/signin",
  // },
};
