import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from "react";

const DaWinti = () => {  

  const [screenSize, setScreenSize] = useState();
    
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

    return (
      <>
        <header className="header-detail-page">
            
            <div className="logo-detail-page" >
                <Link href='/'>
                  <img src="/logo-black-white.png" />
                </Link>
            </div> 

            <div className="details-navigation-links">
              <Link href="/#kontakt-mig-section">
                <button>
                    Kom i kontakt
                </button>
              </Link>
              {screenSize > 768 || screenSize == 768 ?
                <div className="socials-detail">
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
                    <li>
                      <a href="https://www.instagram.com/thisisgisito/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                  </ul>
                </div> : ""
              }
                
            </div>

        </header>

        <div className="content details-content">
          <section id="dawinti-intro">
            
          <article id="overblik-tekst">
              <h1>
                DA WINTI'S NYE LOGO OG HJEMMESIDE
              </h1>

              <ul className="tools-used">
                <li>
                  WordPress |
                </li>
                <li>
                  Elementor |
                </li>
                <li>
                  Elementor class |
                </li>
                <li>
                  Adobe XD og IA
                </li>
              </ul>

              <p>
                Mig og en medstuderende fik til opgave fra kunst- og kulturhuset Da Winti i Selde,
                at give dem en ny visuel identitet som repræsentere dem og hvad de står for, en hjemmeside
                som har et stærkt sammenhæng med den nye identitet og hjælpe dem med at styrke deres online tilstedeværelse.
              </p>
            </article>

            <div id="dawinti-project-link">
              <div id="dawinti-project-grid">
                <div className="link-overlay-tekst" id="link-overlay-siden">
                    <a href="https://dawinti.drescher-rijna.dk/" target="_blank">
                      <h4>
                        Besøg hjemmesiden
                      </h4>
                    </a>   
                </div>
                <div id="dawinti-siden">
                  <a href="https://dawinti.drescher-rijna.dk/" target="_blank">
                    <div id="dawinti-siden-bg">
                      
                    </div>
                  </a>
                </div>
              </div>
              
              <div id="dawinti-plugin-grid">
                <div className="link-overlay-tekst" id="link-overlay-git">
                      <a href="https://github.com/Drescher-Rijna/dawinti-plugin" target="_blank" className="detail-project-link">
                        <h4>
                          Github repo for plugin
                        </h4>
                      </a>
                </div>
                
                <div id="dawinti-plugin">
                  <a href="https://github.com/Drescher-Rijna/dawinti-plugin" target="_blank" className="detail-project-link">
                    <div id="dawinti-plugin-bg">
                        
                    </div>
                  </a>
                </div>
              </div>
            </div>

            
          </section>
        </div>
      </>
    )
}

export default DaWinti;