import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'

const Index = () => {
  return (
    <>
    <Header />
    <Link to='/contact'>Contact</Link>
    </>
  )
}

export default Index;