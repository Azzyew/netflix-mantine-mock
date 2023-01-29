import { Button, Center, Container, Title } from '@mantine/core';
import { GetServerSideProps } from 'next';
import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import { getSession, signIn } from 'next-auth/react';
import { useStyles } from '../styles/login';

const Login = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Center style={{ width: '100vw', height: '100vh' }}>
        <Container className={classes.container}>
          <div className={classes.inner}>
            <Title order={2} className={classes.title}>Sign In</Title>
            <Button
              leftIcon={< AiOutlineGoogle size={20}/>}
              className={classes.signInButton}
              onClick={() => signIn('google')}
            >
              Sign in with Google
            </Button>
            <Button
              leftIcon={< AiOutlineGithub size={20}/>}
              className={classes.signInButton}
              onClick={() => signIn('github')}
            >
              Sign in with GitHub
            </Button>
          </div>
        </Container>
      </Center>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if(session) {
    return {
      redirect: {
        destination: '/',
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

export default Login;
