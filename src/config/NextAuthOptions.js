import { loginUser } from "@/actions/server/user";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        const result = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (!result.success) {
          throw new Error(
            JSON.stringify({ message: result.message, errors: result.errors })
          );
        }

        return result.data;
      },
    }),
  ],
};

export default authOptions;
