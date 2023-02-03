/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import {
  Burger,
  Button,
  Group,
  Header as MantineHeader,
  Input,
  MediaQuery,
  Menu,
  Paper,
  Transition,
  useMantineTheme
} from '@mantine/core';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { HiLogout } from 'react-icons/hi';
import { useStyles } from './styles';
import { signOut } from 'next-auth/react';

interface HeaderProps {
  username: string | null | undefined;
}

const Header = ({username}: HeaderProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [showSearch, setShowSearch] = useState(false);
  const [opened, setOpened] = useState(false);

  const links = [
    {name: 'Home', href: '/'},
    {name: 'TV Shows', href: '/'},
    {name: 'Movies', href: '/'},
    {name: 'New & Popular', href: '/'},
    {name: 'My List', href: '/'},
  ];

  const handleSearchIcon = () => {
    !showSearch ? setShowSearch(true) : setShowSearch(false);
  };

  const handleSignOut = () => {
    signOut();
  };

  const navLinks = links.map((link) => (
    <Menu.Target key={link.name}>
      <a
        className={classes.regularNav}
        href={link.href}
      >
        {link.name}
      </a>
    </Menu.Target>
  ));

  return (
    <MantineHeader height={68} className={classes.header}>
      <Group className={classes.wrapper}>
        <Group mb={4} mr={10}>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            {/* mantine UI doesn't support next/image for media query before v13*/}
            <img src="/logo.png" alt="Netflix logo" height={68} width={130} />
          </MediaQuery>
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((wasOpened) => !wasOpened)}
              size="sm"
              color={theme.colors.red[1]}
              mr="xl"
            />
          </MediaQuery>
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                <Menu trigger="hover" exitTransitionDuration={0}>
                  {navLinks}
                </Menu>
              </Paper>
            )}
          </Transition>
          
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Menu trigger="hover" exitTransitionDuration={0}>
              {navLinks}
            </Menu>
          </MediaQuery>
        </Group>

        <Group spacing="xs">
          {showSearch &&
            <Input />
          }
          <Button
            variant="subtle"
            leftIcon={<AiOutlineSearch color={theme.colors.dark[1]}/>}
            onClick={handleSearchIcon}
            style={{ width: '40px'}}
            className={classes.menuButtons}
          />
          <Button
            variant="subtle"
            leftIcon={<AiOutlineBell color={theme.colors.dark[1]}/>}
            style={{ width: '40px'}}
            className={classes.menuButtons}
          />
          <Menu transition="pop-top-right" position="top-end" width={110} withinPortal>
            <Menu.Target>
              <Button
                variant="subtle"
                className={classes.username}
                rightIcon={<IoIosArrowDown size={18} color={theme.colors.dark[1]}/>}
                pr={12}
              >
                {username}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                icon={<HiLogout size={16} />}
                onClick={() => {handleSignOut();}}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </MantineHeader>
    );
};

export default Header;
