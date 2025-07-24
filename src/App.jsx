import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Video-Player/VideoPlayer'
const App = () => {
  const [playState,setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Program' title='What we offer'/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Explore Our Campus'/>
        {/* You can add a Campus component here if you have one */}
        <Campus />
        <Title subtitle='Testimonials' title='What students says'/>
        <Testimonials />
        <Title subtitle='Contact us' title='Get in touch'/>
        <Contact />
        <Footer/>

      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
