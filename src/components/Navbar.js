import React from 'react'
import Link from 'next/link'

export default function Navbar(props) {

    const mode = props.mode ? '' : "dark";

    return (
        <div className={`navContainer  ${mode}`} >
            <div className="navBasics">
                <Link href='/'><img className='navLogos' src={`/icons/${props.mode?'light_home.png':'dark_home.png'}`} alt="" /></Link>
                <img className='navLogos' onClick={()=>{props.togglemode()}} src={`/icons/${props.mode?'light.png':'dark.png'}`} alt="" />
            </div>
            <div className="navLinks">
                <a href='https://www.linkedin.com/in/divya-kumar-baid-98a087200/'><img className='navLogos' src={`/icons/${props.mode?'light_linkedin.png':'dark_linkedin.png'}`} alt="" /></a>
                <a href='https://github.com/DivyaKumarBaid'><img className='navLogos' src={`/icons/${props.mode?'light_github.png':'dark_github.png'}`} alt="" /></a>
            </div>
        </div>
    )
}