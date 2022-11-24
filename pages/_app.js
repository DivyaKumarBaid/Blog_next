import '../styles/globals.css'
import { ThemeProvider } from '../src/utils/Theme'
import Navbar from '../src/components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
