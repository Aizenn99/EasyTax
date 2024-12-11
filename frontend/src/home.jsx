import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/ui/custom/Header'
import Hero from './components/ui/custom/Hero'
import Category from './components/ui/custom/Category'
import MostsearchCar from './components/ui/custom/MostsearchCar'
import Infosection from './components/ui/custom/Infosection'
import Footer from './components/ui/custom/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <MostsearchCar />
      <Infosection />
      <Footer />
    </div>
  )
}  

export default Home