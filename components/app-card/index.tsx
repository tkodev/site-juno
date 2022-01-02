import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography, Button, Card, CardContent, CardActions, Divider, Chip } from '@mui/material';
import { DockerApp } from '@/types/docker'
import { getDockerLabelUrl } from '@/utils/docker'

type AppCardProps = {
  app: DockerApp
}

const stateColorMap = {
  Created: 'warning.main',
  Restarting: 'warning.main',
  Running: 'success.main',
  Removing: 'warning.main',
  Paused: 'error.main',
  Exited: 'error.main',
  Dead: 'error.main',
}

const useStyles = makeStyles({
  root: {},
})

const AppCard: React.FC<AppCardProps> = (props) => {
  const { app } = props
  const styles = useStyles(props)

  const name = app?.Names[0]
  const url = getDockerLabelUrl(app?.Labels)
  const color = stateColorMap[app?.State ?? '']

  if (!name) return null

  return (
    <Card className={styles.root}>
      <CardContent>
        <Typography variant="h2">
          {name}
        </Typography>
        <Divider />
        <Typography variant="body1">
          State:
        </Typography>
        <Chip 
          variant='filled'
          size='small'
          sx={{ backgroundColor: color }}
          label={app?.State}
        />
      </CardContent>
      <CardActions>
        {url && <Button href={url}>Visit</Button>}
      </CardActions>
    </Card>
  )
}

export { AppCard }
