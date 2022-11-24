import '../styles/globals.css'
import { ThemeProvider } from '../src/utils/Theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
