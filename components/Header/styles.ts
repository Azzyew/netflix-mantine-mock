import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      marginTop: 18,
    },
  },

  dropdown: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '5px 0px',
    top: 68,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  regularNav: {
    lineHeight: 1,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.gray[3],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      color: theme.colors.gray[5],
    },
  },

  header: {
    padding: '0px 50px 0px 50px',
  },

  username: {
    color: theme.colors.dark[1],

    '&:hover': {
      backgroundColor: theme.colors.dark[7],
      color: theme.colors.dark[2],
    },
  },

  menuButtons: {
    '&:hover': {
      backgroundColor: theme.colors.dark[7]
    },
  }
}));