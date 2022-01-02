import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Divider, Badge, Grid } from '@mui/material';
import { DockerApp, DockerAppState } from '@/types/docker'
import { getDockerLabelUrl } from '@/utils/docker'

type AppCardProps = {
  app: DockerApp
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

const useStyles = makeStyles({
  root: {
    height: '100%'
  },
  badge: {
    '& .MuiBadge-badge': {
      position: 'static',
      transform: 'none',
      transition: 'none',
      textTransform: 'capitalize'
    }
  }
})

const AppCard: React.FC<AppCardProps> = (props) => {
  const { app } = props
  const styles = useStyles(props)

  const name = app?.Names[0]?.replace('/', '')
  const url = getDockerLabelUrl(app?.Labels)
  const state = app?.State
  const status = app?.Status
  const color = stateColorMap[app?.State ?? '']

  if (!name) return null

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
      </CardContent>
      <Divider />
      <CardContent>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='body1'>
            <strong>State:</strong>
          </Typography>
          <Badge
            className={styles.badge}
            badgeContent={state}
            color={color}
          />
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
        <Button color='primary' size='small' href={url ?? ''} disabled={!url} target="_blank">Visit</Button>
      </CardActions>
    </Card>
  )
}

export { AppCard }
