import { Container } from '@mantine/core'
import { useStyles } from './styles'

const Hero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.inner}>
        </div>
      </Container>
    </div>
  )
}

export default Hero