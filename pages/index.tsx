import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import { useContext } from 'react'
import { LandingContext } from '../context/Landing'
import Presentation from '../components/presentations'
import Footer from '../components/Footer'
/* import "componentes-dengel/dist/style.css" */
export default function Home() {
  const {setOpenMenu}=useContext(LandingContext)
  return (
    <div className="bg-white1 w-full h-full">
      <Head>
        <title>landing - home dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <main className='overflow-y-auto'>
          {/* <Link href="/den/lista">IR A LA LISTA</Link> */}
          <Presentation/>
          
        </main>
        
        <footer>
        <Footer/>
        </footer>
        
       
        
      
      
    </div>
  )
}
