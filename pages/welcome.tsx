import { NextPageContext } from 'next';
import { useSession, getSession } from 'next-auth/client';

import { AccessDenied } from '@/components/AccessDenied';

const Page = () => {
  const [session, loading] = useSession();

  if (typeof window !== 'undefined' && loading) return null;

  if (!session) return <AccessDenied />;

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  return {
    props: { session },
  };
};

export default Page;
