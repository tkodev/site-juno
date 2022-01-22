import React from 'react'
import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Image from 'next/image'
import { Theme } from '@/configs/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    gridRow: 1,
  },
  toolbar: {
    padding: 0,
  },
  logo: {
    height: 72,
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(2),
  }
}))

const Header: React.FC = (props) => {
  const styles = useStyles(props)

  return (
    <header className={styles.root}>
      <AppBar position="relative" color="transparent">
        <Container maxWidth='lg'>
        <Toolbar className={styles.toolbar}>
          <Box className={styles.logo}>
            <Image
              src="/logo-clear.png"
              alt="Logo"
              width="72"
              height="72"
            />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Juno Site
          </Typography>
          <Button color="inherit" href="https://auth.tko.dev/">Login</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}

export { Header }
