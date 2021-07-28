import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import * as Scroll from 'react-scroll';
import { Link as LinkS } from 'react-scroll'
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    const [screenSize, setScreenSize] = useState();
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        setScreenSize(window.innerWidth);
    },[]);

    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth);
            console.log(screenSize);
            
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[screenSize]);

    function handleBurgermenu() {
        setMenuOpen(!menuOpen);
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    

    return (
        <header>
            
            {screenSize < 768 &&
            <div className="logo" >
                <LinkS to='/' onClick={toggleHome}>
                    <img src="/logo-black-white.png" />
                </LinkS>
            </div>
            }

            
            {screenSize < 768 &&
            <button id="menu-btn" onClick={handleBurgermenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            }

            {screenSize < 768 &&
                    <div id="mobil-menu-container" className={menuOpen ? 'mobil-menu-container-active' : 'mobil-menu-container'}>
                        <nav className="global-menu-mobil">
                            <ul className="menu-liste-mobil">
                                <LinkS activeClass="activeMobil" to='om-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                                    <li onClick={screenSize < 768 ? handleBurgermenu : undefined}>
                                        Om mig
                                    </li>
                                </LinkS>
                                <LinkS activeClass="activeMobil" to='projekter-section' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                                    <li onClick={screenSize < 768 ? handleBurgermenu : undefined}>
                                        Projekter
                                    </li>
                                </LinkS>
                                <LinkS activeClass="activeMobil" to='skillset-section' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                                    <li onClick={screenSize < 768 ? handleBurgermenu : undefined}>
                                        Skillset
                                    </li>
                                </LinkS>
                                <LinkS activeClass="activeMobil" to='kontakt-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                                    <li onClick={screenSize < 768 ? handleBurgermenu : undefined}>
                                        Kontakt mig
                                    </li>
                                </LinkS>
                            </ul>
                        </nav>
                        <div className="socials-mobil">
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
                    </div>
                }

                {screenSize == 768 &&
                    <NavbarDesktop />
                }

                {screenSize > 768 &&
                    <NavbarDesktop />
                }       

        </header>
    )
}

export default Navbar;