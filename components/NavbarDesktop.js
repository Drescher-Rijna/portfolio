import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { animateScroll as scroll } from 'react-scroll'

const NavbarDesktop = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <nav className="global-menu-desktop">
            <div className="logo">
                <Link to='/' onClick={toggleHome}>Logo</Link>
            </div>
            <ul className="menu-liste-desktop">
                <Link activeClass="active" to='om-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                    <li>
                        Om mig
                    </li>
                </Link>
                <Link activeClass="active" to='projekter-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                    <li>
                        Projekter
                    </li>
                </Link>
                <Link activeClass="active" to='skillset-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                    <li>
                        Skillset
                    </li>
                </Link>
                <Link activeClass="active" to='kontakt-mig-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                    <li>
                        Kontakt mig
                    </li>
                </Link>
            </ul>
            <div className="socials-desktop">
                <ul>
                    <li>
                        GH
                    </li>
                    <li>
                        LI
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarDesktop;