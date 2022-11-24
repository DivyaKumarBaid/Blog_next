import Navbar from '../src/components/Navbar'
import React from 'react'
import { MicroBlog } from '../src/components/BlogCard/MicroBlog'
import { useThemeToggle, useThemeValue } from '../src/utils/Theme';

export default function Home() {

  const theme = useThemeValue(); // use the providers value of the useThemeValue custom hook


  return (
    <div className={`App ${theme ? "" : "dark"}`}>
      <div className="bodyContainer">
        <MicroBlog />
      </div>
    </div>
  )
}
