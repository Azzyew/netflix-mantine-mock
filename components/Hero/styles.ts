import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  hero: {
    position: 'absolute',
    width: '98%',
    maxHeight: '88%',
    objectFit: 'cover',
    zIndex: -1,

    [theme.fn.smallerThan('sm')]: {
      width: '95%',
    },
  },

  inner: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '75vh',

    [theme.fn.smallerThan('md')]: {
      height: '70vh',
    },

    [theme.fn.smallerThan('sm')]: {
      height: '40vh',
    },

    [theme.fn.smallerThan(400)]: {
      height: '36vh',
    },
  },

  description: {
    margin: '0 0 0 -14vw',
    color: theme.white,
    fontWeight: 500,
    lineHeight: 1.2,
    maxWidth: 600,
    fontSize: 20,
    zIndex: 1,

    [theme.fn.smallerThan(1000)]: {
      margin: '12vh 0 0 -1vw',
    },

    [theme.fn.smallerThan('lg')]: {
      margin: '12vh 0 0 -1vw',
    },

    [theme.fn.smallerThan('md')]: {
      margin: '0',
    },

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: 10,
      lineHeight: 1.15,
    },
  },

  buttonWrapper: {
    margin: '10px 0 0 -14vw',
    flexDirection: 'row',

    [theme.fn.smallerThan('lg')]: {
      margin: '10px 0 0 -2vw',
    },

    [theme.fn.smallerThan('md')]: {
      margin: '10px 0 0 0',
    },
  },

  playButton: {
    height: '40px',
    width: '120px',
    fontSize: '16px',
    color: 'black',

    [theme.fn.smallerThan('sm')]: {
      height: '25px',
      width: '85px',
      fontSize: '10px'
    },
  },

  icons: {
    fontSize: '20px',

    [theme.fn.smallerThan('sm')]: {
      fontSize: '10px'
    },
  },

  infoButton: {
    backgroundColor: theme.fn.rgba(theme.colors.dark[1], 0.8),
    margin: '0 0 0 10px',
    height: '40px',
    width: '160px',
    fontSize: '16px',
    color: 'white',


    [theme.fn.smallerThan('sm')]: {
      height: '25px',
      width: '110px',
      fontSize: '10px'
    },
  },
}));
