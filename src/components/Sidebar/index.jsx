import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='Logo' />
            </Link>
            <nav>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/'
                >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    className='about-link'
                    to='/about'
                >
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    className='skills-link'
                    to='/skills'
                >
                    <FontAwesomeIcon icon={faGear} color='#4d4d4e' />
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    className='project-link'
                    to='/projects'
                >
                    <FontAwesomeIcon icon={faCode} color='#4d4d4e' />
                </NavLink>
            </nav>
            <div className='icons'>
                <ul>
                    <Link target='_blank' to='https://www.linkedin.com/in/mati-dev/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </Link>
                </ul>
                <ul>
                    <Link target='_blank' to='https://github.com/MatiAlva'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </Link>
                </ul>
            </div>
        </div>
    )
}