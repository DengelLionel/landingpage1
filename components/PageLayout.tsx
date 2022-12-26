import React from 'react'
import Head from 'next/head'
interface pageLayout{
    children:any,
    title:any,
}
const PageLayout = ({children,title="landing"}:pageLayout) => {
  return (<>
    <Head>
    <title>{title}</title>
    <meta name='description' content='new app landing' />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <header>█ dengel</header>
  <main className=' h-full overflow-y-scroll '>
    {children}
  </main>
  </>
  )
}

export default PageLayout