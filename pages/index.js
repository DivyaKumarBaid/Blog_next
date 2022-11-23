import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import React from 'react'

export default function Home() {

  const [mode, setMode] = React.useState(false) //true for light false for dark
  function toggleMode() {
    setMode(!mode)
  }

  return (
    <div className={`App ${mode?"":"dark"}`}>
      <Navbar togglemode={toggleMode} mode={mode} />
      <div className="bodyContainer">
        
      </div>
    </div>
  )
}
