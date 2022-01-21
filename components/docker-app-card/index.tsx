import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Divider, Badge, Grid } from '@mui/material';
import { DockerCard, DockerAppState } from '@/types/docker'
import { Theme } from '@/configs/theme';

type DockerAppCardProps = {
  card: DockerCard
}

type StateColor = 'warning' | 'success' | 'error'

const stateColorMap: Record<DockerAppState, StateColor> = {
  created: 'warning',
  restarting: 'warning',
  running: 'success',
  removing: 'warning',
  paused: 'error',
  exited: 'error',
  dead: 'error',
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%'
  },
  state: {
    textTransform: 'capitalize',
    padding: `0 ${theme.spacing(1)}`,
    borderRadius: theme.spacing(2),
  },
  button: {
    minWidth: 0,
  }
}))

const DockerAppCard: React.FC<DockerAppCardProps> = (props) => {
  const { card } = props
  const { container, state, status, name, url } = card
  const styles = useStyles(props)

  const color = stateColorMap[state ?? '']

  return (
    <Card className={styles.root}>
      <CardMedia
        component='img'
        height='100'
        image='/docker.png'
        alt='Application'
      />
      <CardContent>
        <Typography variant='h6'>
          {name}
        </Typography>
      <Divider sx={{
        mt: 1,
        mb: 2
      }} />
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='body1'>
            <strong>Container:</strong>
          </Typography>
          <Typography variant='body1'>
            {container}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='body1'>
            <strong>State:</strong>
          </Typography>
          <Button
            className={styles.state}
            variant="contained"
            size="small"
            color={color}
            disableElevation
            disableFocusRipple
          >
            {state}
          </Button>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='body1'>
            <strong>Status:</strong>
          </Typography>
          <Typography variant='body1'>
            {status}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Box display='flex' justifyContent='space-between' alignItems="center" sx={{ px: 1, width: '100%' }}>
          <Typography variant='body1'>
            <strong>URL:</strong>
          </Typography>
          <Button className={styles.button} variant='outlined' color='primary' size='small' href={url ?? ''} target="_blank" disabled={!url}>{url ? 'Visit' : 'Internal Only'}</Button>
        </Box>
      </CardActions>
    </Card>
  )
}

export { DockerAppCard }
