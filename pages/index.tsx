import React from 'react';
import Head from 'next/head';
import { signOut, useSession } from 'next-auth/client';

import { request } from '@/lib/graphql';
import { Intro } from '@/components/Intro';
import { Background } from '@/components/Background';

const Home = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>The Zen Habits Protocol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session && <Intro />}
      {session && <Background session={session} />}

      {session && (
        <footer>
          <a
            href="#logout"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Log out
          </a>
        </footer>
      )}

      <style jsx>{`
        footer {
          padding: 40px 0 10px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const data = await request({ query: HOMEPAGE_QUERY });
//   return { props: { users: data.users } };
// };

export default Home;
