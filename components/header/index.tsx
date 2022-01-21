import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    gridRow: 1,
  }
}))

const Header: React.FC = (props) => {
  const styles = useStyles(props)

  return (
    <header className={styles.root}>
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Juno Site
          </Typography>
          <Button color="inherit" href="https://auth.tko.dev/">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export { Header }
