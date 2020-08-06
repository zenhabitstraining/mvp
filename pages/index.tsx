import React from 'react';
import Head from 'next/head';
import {
  // signIn, signOut,
  useSession,
} from 'next-auth/client';

import { Intro } from '@/components/Intro';
import { Background } from '@/components/Background';
// import { request } from "@/lib/graphql";

interface User {
  email: string;
  name: string;
}

interface Props {
  users: User[];
}

const Home: React.FC<Props> = ({ users }) => {
  const [session, loading] = useSession();

  console.log(users);
  console.log('loading', loading);
  console.log('session', session);

  return (
    <>
      <Head>
        <title>Mindfulness Revolutionized</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session && <Intro />}
      {session && <Background />}
    </>
  );
};

// const HOMEPAGE_QUERY = `
//   query Users {
//     users {
//       email
//       name
//     }
//   }
// `;

// export const getServerSideProps = async () => {
//   const data = await request({ query: HOMEPAGE_QUERY });
//   return { props: { users: data.users } };
// };

export default Home;
