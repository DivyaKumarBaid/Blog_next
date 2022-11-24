import React from 'react'
import { MicroBlog } from '../src/components/BlogCard/MicroBlog'
import { Hero } from '../src/components/Hero/Hero';
import { useThemeValue } from '../src/utils/Theme';

export default function Home() {

  const theme = useThemeValue(); // use the providers value of the useThemeValue custom hook


  return (
    <div className={`App ${theme ? "" : "dark"}`}>
      <div className="bodyContainer">
        <Hero />
        <MicroBlog />
      </div>
    </div>
  )
}
