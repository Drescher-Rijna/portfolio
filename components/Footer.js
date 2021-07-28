import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <ul className="footer-socials">
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
            <div className="footer-bg">
                <p>&#169; Drescher Ferdinand Rijna 2021</p>
            </div>
        </footer>
    )
}

export default Footer;