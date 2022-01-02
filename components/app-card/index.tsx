import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography, Box, Button, Card, CardContent, CardActions, Divider, Chip, Grid } from '@mui/material';
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

  console.log({ props })

  const name = app?.Names[0]
  const url = getDockerLabelUrl(app?.Labels)
  const color = stateColorMap[app?.State ?? '']

  const hasActions = !!url

  if (!name) return null

  return (
    <Card className={styles.root}>
      <CardContent>
        <Typography variant="h6">
          {name}
        </Typography>
        <Box my={1}>
          <Divider />
        </Box>
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="body1">
              <strong>State:</strong>
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Chip
              variant='filled'
              size='small'
              sx={{ backgroundColor: color }}
              label={app?.State}
            />
          </Grid>
        </Grid>
      </CardContent>
      {hasActions && (
        <CardActions>
          {url && <Button href={url}>Visit</Button>}
        </CardActions>
      )}
    </Card>
  )
}

export { AppCard }
