import React from 'react'
import Hero from '../components/Hero/Hero'
import Portfolio from '../components/Portfolio/Portfolio'
import Head from 'next/head'


const portfolio = () => {
  return (
    <div>
      <Head>
          <title>MyWork</title>
          <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero heading={'My Work'} message={'This is some of my recent work'} />
      <Portfolio/>
    </div>
  )
}

export default portfolio