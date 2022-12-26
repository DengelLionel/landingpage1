import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {LandingHandler} from "../context/Landing";
export default function App({ Component, pageProps }: AppProps) {
  return <LandingHandler>
    <Component {...pageProps} />
  </LandingHandler>
}
