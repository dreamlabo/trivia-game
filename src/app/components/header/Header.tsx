import React from 'react'
import { FaChevronDown } from "react-icons/fa6";

export default function Header() {
  return (
    <div className='header-wrapper'>
        <header className='header-container'>
            <div className='logo-wrapper'>
                <span className='logo-first-letter'>N</span><span className='rest-of-word'>ightmare</span>&nbsp;&nbsp; <span className='logo-first-letter'>K</span><span className='rest-of-word'>nowledge</span>
            </div>
            <button className='btn--openDropdown'><span>Choose Quiz</span><FaChevronDown /></button>
        </header>
        
    </div>
  )
}
