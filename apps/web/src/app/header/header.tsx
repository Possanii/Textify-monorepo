import React from 'react'
import Logo from '../login/Logo_with_black_text.png'

export default function Header(){
    return( 
        <nav className=' text-justify text-black align-text-top'>
            <div>
                <img src={Logo.src} alt="Logo" />
            </div>
        </nav>
    )
}