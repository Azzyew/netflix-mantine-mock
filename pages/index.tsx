import { AppShell } from '@mantine/core';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { Header, Hero } from '../components';

const Home = () => {
  const { data: session } = useSession();
  
  return (
    <AppShell header={<Header username={session?.user?.name}/>}>
      <>
        <Hero />
      </>
    </AppShell>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
};

export default Home;
