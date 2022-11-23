import Navbar from '../src/components/Navbar'
import React from 'react'
import { MicroBlog } from '../src/components/BlogCard/MicroBlog'

export default function Home() {

  const [mode, setMode] = React.useState(false) //true for light false for dark
  function toggleMode() {
    setMode(!mode)
  }

  return (
    <div className={`App ${mode?"":"dark"}`}>
      <Navbar togglemode={toggleMode} mode={mode} />
      <div className="bodyContainer">
        <MicroBlog mode={mode} />
      </div>
    </div>
  )
}
