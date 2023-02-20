import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url(/hero.jpg)',
    height: '90vh',
    width: '96vw',
  },

  title: {
    color: theme.white,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  inner: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '75vh',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  description: {
    margin: '0 0 0 -14vw !important',
    color: theme.white,
    fontWeight: 500,
    lineHeight: 1.2,
    maxWidth: 600,
    fontSize: 20,

    [theme.fn.smallerThan('lg')]: {
      maxWidth: '100%',
      margin: '10px 0 0 0',
      fontSize: 14,
      lineHeight: 1.15,
    },
  },

  buttonWrapper: {
    margin: '10px 0 0 -14vw',
    flexDirection: 'row',

    [theme.fn.smallerThan('md')]: {
      margin: '10px 0 0 0',
    },
  },

  playButton: {
    height: '40px',
    width: '120px',
    fontSize: '16px',
    color: 'black',
  },

  infoButton: {
    backgroundColor: theme.fn.rgba(theme.colors.dark[1], 0.8),
    margin: '0 0 0 10px',
    height: '40px',
    width: '160px',
    fontSize: '16px',
    color: 'white',
  },
}));
