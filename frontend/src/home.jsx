import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/ui/custom/Header'
import Hero from './components/ui/custom/Hero'
import Category from './components/ui/custom/Category'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
    </div>
  )
}  

export default Home