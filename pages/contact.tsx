import React from 'react'
import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact'
import Head from 'next/head'
const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Hero heading={'Contact'} message={'Submit the form below for more work and quotes'}/>
        <Contact/>
    </div>
  )
}

export default contact