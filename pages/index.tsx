import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero/Hero'
import Slider from '../components/Slider/Slider'
import { SliderData } from '../components/Slider/SliderData'
import Instagram from '../components/Instagram/Instagram'


const Home = () => {
  return (
    <div >
      <Head>
        <title>PhotoGraphy</title>

        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero heading="Capture Moments" message="I capture best moments that I like to capture."/>
      <Slider slides={SliderData}/>
      <Instagram/>
    </div>
  )
}

export default Home
