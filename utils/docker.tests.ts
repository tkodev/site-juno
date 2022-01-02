import { getDockerLabelUrl } from './docker';

describe('#getDockerLabelUrl', () => {
  it('finds the correct docker label url', () => {
    expect(
      getDockerLabelUrl({
        'traefik.enable': 'true',
        'traefik.http.routers.site-juno.rule': 'Host(`juno.tko.dev`)',
        'traefik.http.routers.site-juno.entrypoints': 'http',
        'traefik.https.routers.site-juno.entrypoints': 'https',
        'traefik.https.routers.site-juno.tls': 'true',
        'traefik.https.routers.site-juno.tls.certresolver': 'letsencrypt',
      })
    ).toEqual('juno.tko.dev');
  });
});
