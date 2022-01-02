const replaceProtocol = (url: string, protocol: string = 'https') => {
  const cleanProtocol = protocol ? `${protocol}://` : ''
  const cleanUrl = url ? url.replace(/^(https?:)?(\/\/)?/, '') : ''
  return `${cleanProtocol}${cleanUrl}`
}

export { replaceProtocol }