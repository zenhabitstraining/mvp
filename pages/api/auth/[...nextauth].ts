import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const database = {
  type: "postgres",
  host: "ec2-54-86-57-171.compute-1.amazonaws.com",
  port: 5432,
  username: "menhfjfxiakhoy",
  password: "798bf5e1da358e5ef66073b5805843ddcd3b25483ad49a5b75766cdca19c28c0",
  database: "d2m9asatulbvqb",
  ssl: {
    rejectUnauthorized: false,
    // ca: fs.readFileSync(certFile).toString(),
  },
};

const options = {
  database,
  providers: [
    Providers.Email({
      server: {
        host: "smtp.eu.mailgun.org",
        port: 587,
        auth: {
          user: "postmaster@mg.ombits.com",
          pass: "8f12b9665c57ae59ce4b2b05a16685b5-915161b7-7a1bbcae",
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
