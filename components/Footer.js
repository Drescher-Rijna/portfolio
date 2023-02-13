import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <ul className="footer-socials ml-4">
                <li>
                    <a href="https://github.com/Drescher-Rijna">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/drescher-rijna/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/thisisgisito/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
            </ul>
            <div className="footer-bg">
                <p>&#169; Drescher Rijna 2021</p>
            </div>
        </footer>
    )
}

export default Footer;