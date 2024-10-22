'use client'
import { useState, useEffect, useRef } from 'react';
import React from 'react'
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa6";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleOpenDropdown = () => {
        setIsDropdownOpen(prev => !prev)
    }

    const dropdownRef = useRef<HTMLDivElement | null>(null); 

    const closeMenu = () => {
        setIsDropdownOpen(false);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            closeMenu();
          }
    }
    
    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    }

    const handleLinkClick = () => {
        closeMenu(); // Close the dropdown when a link inside it is clicked
      };

    useEffect(() => {
        document.body.addEventListener('click', handleClickOutside);
        document.body.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.body.removeEventListener('click', handleClickOutside);
          document.body.removeEventListener('keydown', handleKeyDown);
        }
    })
 
    return (
        <div className='header-wrapper'>
            <header className='header-container'>
                <div className='logo-wrapper'>
                    <span className='logo-first-letter'>N</span><span className='rest-of-word'>ightmare</span>&nbsp;&nbsp; <span className='logo-first-letter'>K</span><span className='rest-of-word'>nowledge</span>
                </div>
                <div ref={dropdownRef}  className='dropdown-wrapper'>
                    <button onClick={handleOpenDropdown} className='btn--openDropdown'><span>Choose Quiz</span><FaChevronDown /></button>
                    {isDropdownOpen &&  <ul className="dropdown-container" >
                                            <li><Link onClick={handleLinkClick} className="dropdown-link" href="/quiz/horror_movies">Horror Movies</Link></li>
                                            <li><Link onClick={handleLinkClick} className="dropdown-link" href="/quiz/stranger_things/">Stranger Things</Link></li>
                                            <li><Link onClick={handleLinkClick} className="dropdown-link" href="/quiz/final_girl">Final Girl</Link></li>
                                        </ul>
                    }
                </div>
            </header>
        </div>
    )
}
