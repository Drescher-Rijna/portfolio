import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { animateScroll as scroll } from 'react-scroll'

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
                <Link to='/' onClick={toggleHome}>Logo</Link>
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
                                <Link activeClass="activeMobil" to='om-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                                    <li>
                                        Om mig
                                    </li>
                                </Link>
                                <Link activeClass="activeMobil" to='projekter-section' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                                    <li>
                                        Projekter
                                    </li>
                                </Link>
                                <Link activeClass="activeMobil" to='skillset-section' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                                    <li>
                                        Skillset
                                    </li>
                                </Link>
                                <Link activeClass="activeMobil" to='kontakt-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                                    <li>
                                        Kontakt mig
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                        <div className="socials-mobil">
                            <ul>
                                <li>
                                    GH
                                </li>
                                <li>
                                    LI
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