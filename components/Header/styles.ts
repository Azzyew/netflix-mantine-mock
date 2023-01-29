import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  link: {
    display: 'block',
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