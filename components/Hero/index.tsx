import { Container, Button } from '@mantine/core';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useStyles } from './styles';

const Hero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.inner}>
          <p className={classes.description}>After waking up in a morgue,
            an orphaned teen discovers she now possesses superpowers
            as the chosen Halo-Bearer for a secret sect of demon-hunting nuns.
          </p>
          <div className={classes.buttonWrapper}>
            <Button className={classes.playButton} leftIcon={<FaPlay size={20}/>} variant="white">Watch</Button>
            <Button className={classes.infoButton} leftIcon={<AiOutlineInfoCircle size={20}/>} variant="light">More info</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;