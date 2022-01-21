import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';

const createEmotionCache = () => {
  // prepend: true moves MUI styles to the top of the <head> so they're loaded first.
  // It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
  return createCache({ key: 'css', prepend: true });
}

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});

type Theme = typeof theme

export { theme, createEmotionCache };
export type { Theme }