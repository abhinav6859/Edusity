import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/program/Program'
import Title from './components/Title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testominals from './components/testominals/Testominals.jsx'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle="OUR PROGRAM" title="What we offer"/>
        <Programs/>
        <About/>
        <Title subtitle="GALARY" title="Campus photos"/>
        <Campus/>
        <Title subtitle="Testimonials" title="What students say"/>
        <Testominals/>
       <Title subtitle="Contact us" title="Get in touch"/>
        <Contact/></div>
        <Footer/>

        

        
      </div>
  )
}

export default App