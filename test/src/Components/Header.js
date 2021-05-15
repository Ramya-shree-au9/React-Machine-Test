import React from 'react'
import './header.css'
import Logo from './logo.png'

 export const Header = () => {
    return (
        <div className='container text-white header'>

            <img className='logo img-fluid' src={Logo} alt =''></img>
            <div className='float-end'>
            <span>Sign up</span>
            <span className='m-3'>  Login</span>
            </div>
            
            <p className='maintexthead'>A marketpalce for conversations, mentorships and performances.</p>

            <div>
                <span>Search New Talent</span>
                <span className='searchbox'>
                <input className=''></input><span><i class="fas fa-search"></i></span>
                </span>
            </div>
        </div>
    )
}

export default Header