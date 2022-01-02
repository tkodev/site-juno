import axios from 'axios'

const axiosClient = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

const dockerClient = axios.create({
  baseURL: 'http://localhost/v1.41',
  socketPath: '/var/run/docker.sock'
});

export { axiosClient, dockerClient }