import * as Scroll from 'react-scroll';
import { Link as LinkS } from 'react-scroll'
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const NavbarDesktop = () => {
    const [scrollPos, setScrollPos] = useState(window.scrollY);

    useEffect(() => {
        function handlePos() {
            setScrollPos(window.scrollY);
        }
        window.addEventListener("scroll", handlePos);
        return () => window.removeEventListener("scroll", handlePos);
    }, [scrollPos]);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <nav className="global-menu-desktop">
            <div className={scrollPos > 64 ? 'logo-scroll' : 'logo'}>
                <LinkS to='/' onClick={toggleHome}>
                    <img src="/logo.png" />
                </LinkS>
            </div>
            <div className={scrollPos > 64 ? 'header-bg-scroll' : 'header-bg'}>
                <ul className={scrollPos > 64 ? 'menu-liste-desktop-scroll' : 'menu-liste-desktop'}>
                    <LinkS className="nav-link" activeClass="active" to='om-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                        <li className={scrollPos > 64 ? 'li-scroll' : 'li-default'}>
                            Om mig
                        </li>
                    </LinkS>
                    <LinkS className="nav-link" activeClass="active" to='projekter-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                        <li className={scrollPos > 64 ? 'li-scroll' : 'li-default'}>
                            Projekter
                        </li>
                    </LinkS>
                    <LinkS className="nav-link" activeClass="active" to='skillset-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                        <li className={scrollPos > 64 ? 'li-scroll' : 'li-default'}>
                            Skillset
                        </li>
                    </LinkS>
                    <LinkS className="nav-link" activeClass="active" to='kontakt-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                        <li className={scrollPos > 64 ? 'li-scroll' : 'li-default'}>
                            Kontakt mig
                        </li>
                    </LinkS>
                </ul>
            </div>
            <div className={scrollPos > 64 ? 'socials-desktop-scroll' : 'socials-desktop'}>
                <ul>
                    <li className="social-desktop-git">
                        <a href="https://github.com/Drescher-Rijna" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li className="social-desktop-li">
                        <a href="https://www.linkedin.com/in/drescher-rijna/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li className="social-desktop-ig">
                        <a href="https://www.instagram.com/thisisgisito/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarDesktop;