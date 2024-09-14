import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css'

function NavMenu() {
    const [isDark, setIsDark] = useState(false);

    const handleToggle = () => {
        setIsDark(!isDark);
    }
    return (
        <>
            <nav className='nav-menu'>
                <div className="logo">
                <Link to='/'>
                    <img src="../../img/logo/logo2_crop.png" alt="" srcset="" />
                    </Link>
                </div>
                <ul className='ul-nav'>
                    <Link className='link-to' to='/'>
                        <li className='li-nav'>home</li>
                    </Link>
                    <Link className='link-to' to='/galeria'>
                        <li className='li-nav'>galeria</li>
                    </Link>
                    <Link className='link-to' to='/sobre'>
                        <li className='li-nav'>sobre</li>
                    </Link>
                    <Link  className='link-to'to='/contacto'>
                        <li className='li-nav'>contacto</li>
                    </Link>
                </ul>
                {/*<div className="space">
                    
                     <div className="darkmode">
                        <div className={isDark ? 'dark' : ''}>
                            <input
                                type="checkbox"
                                className="checkbox"
                                id="chk"
                                checked={isDark}
                                onChange={handleToggle}
                            />
                            <label className="label" htmlFor="chk">
                                <i className="fa-regular fa-sun"></i>
                                <i className="fa-regular fa-moon"></i>
                                <div className="ball"></div>
                            </label>
                        </div>
                    </div> 
                </div>*/}
            </nav>
        </>
    )
}

export default NavMenu
