import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url("/login-bg.jpg")',
    height: '100vh',
    width: '100vw',
    display: 'flex',
  },

  container: {
    zIndex: 1,
    height: '350px',
    width: '350px',
    backgroundColor: '#141414',
    opacity: '0.9',
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '2vw 5vh',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  title: {
    color: theme.white,
    fontWeight: 700,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 30,
    marginBottom: '6vh',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  signInButton: {
    backgroundColor: '#E50914',
    marginTop: '2vh',
    
    '&:hover': {
      backgroundColor: '#bf0811',
    },
  },
}));
