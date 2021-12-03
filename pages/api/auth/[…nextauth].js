// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter"

const options = {
  site: process.env.NEXTAUTH_URL,
  adapter: TypeORMLegacyAdapter(process.env.DATABASE_URL),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
    
  ],
}

export default (req, res) => NextAuth(req, res, options)