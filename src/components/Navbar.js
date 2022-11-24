import React from 'react'
import Link from 'next/link'
import { useThemeToggle, useThemeValue } from '../utils/Theme';

export default function Navbar(props) {

    const theme = useThemeValue(); // use the providers value of the useThemeValue custom hook 
    const themetoggle = useThemeToggle(); // use the providers value of the useThemeToggle custom hook


    const mode = theme ? '' : "dark";

    return (
        <div className={`navContainer  ${mode}`} >
            <div className="navBasics">
                <Link href='/'><img className='navLogos' src={`/icons/${theme ? 'light_home.png' : 'dark_home.png'}`} alt="" /></Link>
                <img className='navLogos' onClick={() => { themetoggle() }} src={`/icons/${theme ? 'light.png' : 'dark.png'}`} alt="" />
            </div>
            <div className="navLinks">
                <a href='https://www.linkedin.com/in/divya-kumar-baid-98a087200/'><img className='navLogos' src={`/icons/${theme ? 'light_linkedin.png' : 'dark_linkedin.png'}`} alt="" /></a>
                <a href='https://github.com/DivyaKumarBaid'><img className='navLogos' src={`/icons/${theme ? 'light_github.png' : 'dark_github.png'}`} alt="" /></a>
            </div>
        </div>
    )
}