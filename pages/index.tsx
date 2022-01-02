import { NextPage } from 'next'
import { Typography, Container, Grid, Box, Divider } from '@mui/material';
import { Layout } from '@/components/layout'
import { dockerClient } from '@/configs/axios'
import { DockerApp } from '@/types/docker'
import { mockApps } from '@/mocks/docker'
import { AppCard } from '@/components/app-card'

type HomePageProps = {
  apps: DockerApp[]
}

const Home: NextPage<HomePageProps> = (props) => {
  const { apps } = props
  console.log({apps})

  return (
    <Layout title='Home' desc='Home'>
      <Container maxWidth="lg">
      <Typography variant="h2">
          Apps
        </Typography>
        <Box my={2}>
          <Divider />
        </Box>
        <Grid container spacing={1}>
          {apps?.map((app) => 
            <Grid item xs={12} md={6} lg={4} key={`appGrid-${app.Id}`}>
              <AppCard app={app} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Layout>
  )
}

const getServerSideProps = async () => {
  const apps = mockApps
  // const apps: DockerApp[] = await dockerClient.get('/containers/json').then((res) => res.data)
  const props = { apps }
  
  return { props }
}

export { getServerSideProps }
export default Home
