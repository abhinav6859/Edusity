import React,{useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/program/Program'
import Title from './components/Title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testominals from './components/testominals/Testominals'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Vid from './components/videoplayer/videoplayer'


function App() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle="OUR PROGRAM" title="What we offer"/>
        <Programs/>
        <About setIsVideoVisible={setIsVideoVisible}/>
        <Title subtitle="GALARY" title="Campus photos"/>
        <Campus/>
        <Title subtitle="Testimonials" title="What students say"/>
        <Testominals/>
        <Title subtitle="Contact us" title="Get in touch"/>
        <Contact/>
        <Footer/>
      </div>

      <Vid isVideoVisible={isVideoVisible}  setIsVideoVisible={setIsVideoVisible} />

      </div>
  )
}

export default App