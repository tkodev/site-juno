import { NextPage } from 'next'
import { Typography, Container, Grid, Box, Divider } from '@mui/material';
import { Layout } from '@/components/layout'
import { dockerClient } from '@/configs/axios'
import { DockerApp, DockerCard } from '@/types/docker'
import { DockerAppCard } from '@/components/docker-app-card'
import { getDockerLabelName, getDockerLabelUrl } from '@/utils/docker'

type HomePageProps = {
  cards: DockerCard[]
}

const Home: NextPage<HomePageProps> = (props) => {
  const { cards } = props

  return (
    <Layout title='Home' desc='Home'>
      <Container maxWidth='lg'>
        <Box my={2}>
        <Typography variant='h2'>
          Applications
        </Typography>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <Box my={2}>
          <Grid container spacing={2}>
            {cards?.map((card) =>
              <Grid item xs={12} sm={6} md={4} key={`dockerAppCardGrid-${card.container}`}>
                <DockerAppCard card={card} />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

const getServerSideProps = async () => {
  const apps = await dockerClient.get<DockerApp[]>('/containers/json').then((res) => res.data)

  const cards = apps
    .map<DockerCard>((app) => {
      const { Names, State, Status, Labels } = app
      const container = Names[0]?.replace('/', '') ?? ''
      const state = State
      const status = Status
      const name = getDockerLabelName(Labels)
      const url = getDockerLabelUrl(Labels)
      return {
        container,
        state,
        status,
        name,
        url,
      }
    })
    .filter(({name}) => Boolean(name))
    .sort((a, b) => a.container.localeCompare(b.container))

  const props = { cards }
  return { props }
}

export { getServerSideProps }
export default Home
