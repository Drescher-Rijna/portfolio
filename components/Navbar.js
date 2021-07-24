import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

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

    return (
        <header>
            
            {screenSize < 768 &&
            <div id="logo">
                Logo
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
                                <li>
                                    Om mig
                                </li>
                                <li>
                                    Projekter
                                </li>
                                <li>
                                    Skillset
                                </li>
                                <li>
                                    Kontakt mig
                                </li>
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