import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faCode, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

export const Sidebar = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='Logo' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact='true'
                    activeclassname='active'
                    to='/'
                >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact='true'
                    activeclassname='active'
                    className='about-link'
                    to='/about'
                >
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact='true'
                    activeclassname='active'
                    className='skills-link'
                    to='/skills'
                >
                    <FontAwesomeIcon icon={faGear} color='#4d4d4e' />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact='true'
                    activeclassname='active'
                    className='project-link'
                    to='/projects'
                >
                    <FontAwesomeIcon icon={faCode} color='#4d4d4e' />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color='#ffd700'
                    size='3x'
                    className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/mati-dev/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/MatiAlva"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className="hamburger-icon"
            />
        </div>
    )
}