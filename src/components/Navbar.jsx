import React from 'react'
import { Link } from 'react-router-dom'
import  Icon  from '../Assets/logo.svg'
import '../App.css'


const Navbar = () => {
  return (
    <div className='home'>
        <nav>
            <div className='logo'>
                <img src={Icon} alt='logo' />
            </div>
            <div className='nav-links'>
              <ul>
                <li><Link to='/signin' className='link'>Sign In</Link></li>
                <li><Link to='/signup' className='link'>Sign Up </Link></li>
              </ul>
            </div>
        </nav>

    </div>
  )
}

export default Navbar