import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    gridRow: 1,
    height: 16,
  }
}))

const Header: React.FC = (props) => {
  const { children } = props
  const styles = useStyles(props)

  return (
    <header className={styles.root}>
      {children}
    </header>
  )
}

export { Header }
