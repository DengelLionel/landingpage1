import React from 'react'
import Head from 'next/head'
import PageLayout from '../../components/PageLayout'
const About = () => {
  return (
    <PageLayout title={"list"}>
    <section>
    <Head>
       {/*  <meta charset="UTF-8" /> */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    </Head>
    
        <main>
          <h1 className='bg-red-700'>Hola mundo</h1>
            
        </main>
    
    </section>
    </PageLayout>
  )
}

export default About