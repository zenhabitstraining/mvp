import React, { useState, useEffect } from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { signOut, useSession, getSession } from 'next-auth/client';

import { request } from '@/lib/graphql';
import { Intro } from '@/components/Intro';
import { Background } from '@/components/Background';
import { getUserFromRes } from '@/lib/get-user-from-res';
import { User } from 'types/user';
import { UserParts } from '@/lib/user-parts';
import { PreAssessment } from '@/components/PreAssessment';
import { Pending } from '@/components/Pending';

interface Props {
  user: User | null;
}

const Home: React.FC<Props> = ({ user: serverUser }) => {
  const [session, isLoadingSession] = useSession();
  const [user, setUser] = useState<User | null>(serverUser);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [user]);

  if (isLoadingSession || (session && !user)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>The Zen Habits Protocol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && <Intro />}
      {user && !user.stage && <Background user={user} setUser={setUser} />}
      {user && user.stage === 'pre-assessment' && (
        <PreAssessment user={user} setUser={setUser} />
      )}
      {user && user.stage === 'pre-assessment-complete' && <Pending />}

      {user && (
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

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  if (session) {
    const res = await request({
      query: FETCH_USER,
      variables: { email: session.user.email },
    });
    const user = getUserFromRes(res);
    return { props: { user } };
  }
  return { props: { user: null } };
};

const FETCH_USER = `
  query FetchUser($email: String!) {
    users(where: { email: { _eq: $email } } ) {
      ${UserParts}
    }
  }
`;

export default Home;
