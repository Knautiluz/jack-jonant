import { makeStyles } from '@material-ui/core'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { LinkedIn, GitHub, Instagram } from '@material-ui/icons'



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  }
}))


function Footer() {

  const classes = useStyles()

  return (
    <>
      <footer style={{ marginTop: '2vh' }} className={classes.root}>
        <BottomNavigation style={{ align: 'center' }}>
          <BottomNavigationAction onClick={() => window.open('https://www.linkedin.com/in/jackson-jones-antunes/', '_blank')} label="Recents" value="recents" icon={<LinkedIn />} />
          <BottomNavigationAction onClick={() => window.open('https://www.instagram.com/jack.jonant/', '_blank')} label="Recents" value="recents" icon={<Instagram />} />
          <BottomNavigationAction onClick={() => window.open('https://github.com/Knautiluz/', '_blank')} label="Favorites" value="favorites" icon={<GitHub />} />
        </BottomNavigation>
      </footer>
    </>
  )
}

export default Footer