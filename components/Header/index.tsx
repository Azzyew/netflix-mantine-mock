import { useState } from 'react';
import Image from 'next/image';
import { Button, Group, Header as MantineHeader, Input, Menu, useMantineTheme} from '@mantine/core';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { HiLogout } from 'react-icons/hi';
import { useStyles } from './styles';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

interface HeaderProps {
  username: string | null | undefined;
}

const Header = ({username}: HeaderProps) => {
  const { classes } = useStyles();
  const [showSearch, setShowSearch] = useState(false);
  const theme = useMantineTheme();
  const router = useRouter();

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

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <MantineHeader height={68} className={classes.header}>
      <Group className={classes.wrapper}>
        <Group mb={4} mr={10}>
          <Image src="/logo.png" alt="Netflix logo" height={68} width={130} />
        
          <Menu trigger="hover" exitTransitionDuration={0}>
            {links.map((link) => (
              <Menu.Target key={link.name}>
                <a
                  className={classes.link}
                  href={link.href}
                >
                  {link.name}
                </a>
              </Menu.Target>
            ))}
          </Menu>
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