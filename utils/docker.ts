const getDockerLabelUrl = (labels: Record<string, string>) => {
  const keyRegex = new RegExp(/^traefik\.http\.routers\.([a-zA-Z0-9-_]+)\.rule$/)
  const valRegex = new RegExp(/^Host\(`(.+)`\)$/)
  const urlKey = Object.keys(labels ?? {}).find((key) => key.match(keyRegex))
  const urlVal = urlKey && labels[urlKey]?.match(valRegex)?.[1]

  return urlVal
}

export { getDockerLabelUrl }