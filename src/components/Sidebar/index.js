import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'  
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <div className="nav-bar">
            <Link className="logo" to="/" onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="Happi" />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                  <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                  <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                  <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon 
                  onClick={() => setShowNav(false)}
                  icon={faClose}
                  color="#ffd700"
                  size="3x"
                  className="close-icon" 
                />
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> 
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/HappiProgrammer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> 
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://youtube.com/@happigenuine1358?si=x_e6qTiVotPmAKUI ">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" /> 
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://skype.com/happigeniune">
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" /> 
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

export default Sidebar
