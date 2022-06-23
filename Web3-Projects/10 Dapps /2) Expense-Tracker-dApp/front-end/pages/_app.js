import { IndexProvider } from '../Context/Context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <IndexProvider>
      <Component {...pageProps} />
    </IndexProvider>
  ) 

}

export default MyApp
