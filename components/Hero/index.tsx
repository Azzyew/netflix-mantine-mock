import { Container } from '@mantine/core';
import { useStyles } from './styles';

const Hero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.inner}>
          <p>After waking up in a morgue,
            an orphaned teen discovers she now possesses superpowers
            as the chosen Halo-Bearer for a secret sect of demon-hunting nuns.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;