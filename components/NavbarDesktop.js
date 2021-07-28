import * as Scroll from 'react-scroll';
import { Link as LinkS } from 'react-scroll'
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavbarDesktop = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <nav className="global-menu-desktop">
            <div className="logo">
                <LinkS to='/' onClick={toggleHome}>
                    <img src="/logo.png" />
                </LinkS>
            </div>
            <div className="header-bg">
            
            <ul className="menu-liste-desktop">
                <LinkS className="nav-link" activeClass="active" to='om-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                    <li>
                        Om mig
                    </li>
                </LinkS>
                <LinkS className="nav-link" activeClass="active" to='projekter-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                    <li>
                        Projekter
                    </li>
                </LinkS>
                <LinkS className="nav-link" activeClass="active" to='skillset-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                    <li>
                        Skillset
                    </li>
                </LinkS>
                <LinkS className="nav-link" activeClass="active" to='kontakt-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                    <li>
                        Kontakt mig
                    </li>
                </LinkS>
            </ul>
            </div>
            <div className="socials-desktop">
                <ul>
                    <li>
                        <a href="https://github.com/Drescher-Rijna" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/drescher-rijna/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarDesktop;