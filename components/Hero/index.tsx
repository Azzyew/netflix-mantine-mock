import { Container, Button } from '@mantine/core';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useStyles } from './styles';

const Hero = () => {
  const { classes } = useStyles();

  return (
    <>
      <img src='hero.jpg' className={classes.hero}/>
      <Container>
        <div className={classes.inner}>
          <p className={classes.description}>After waking up in a morgue,
            an orphaned teen discovers she now possesses superpowers
            as the chosen Halo-Bearer for a secret sect of demon-hunting nuns.
          </p>
          <div className={classes.buttonWrapper}>
            <Button className={classes.playButton} leftIcon={<FaPlay className={classes.icons}/>} variant="white">Watch</Button>
            <Button className={classes.infoButton} leftIcon={<AiOutlineInfoCircle className={classes.icons}/>} variant="light">More info</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;