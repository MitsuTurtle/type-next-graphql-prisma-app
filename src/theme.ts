import { ThemeOptions, createTheme } from '@mui/material'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1DA1F2',
      contrastText: '#FFFFFF',
    },
  },
}

export const Theme = createTheme(themeOptions)
