import NextAuthOptions from "@/provider/NextAuthOptions";
import NextAuth from "next-auth";

const Auth = NextAuth(NextAuthOptions);

export { Auth as GET, Auth as POST };
