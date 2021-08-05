import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import GisitoScootersTilt from '../components/GisitoScootersTilt'
import ToScootTilt from '../components/ToScootTilt'
import TrickDiceTilt from '../components/TrickDiceTilt'
import DaWintiTilt from '../components/DaWintiTilt'
import SkillsetMeter from '../components/SkillsetMeter'
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { animateScroll as scroll } from 'react-scroll'
import { Link as LinkS } from 'react-scroll'
import DaWintiModal from '../components/DaWintiModal'
import ToScootModal from '../components/ToScootModal';
import GisitoScootersModal from '../components/GisitoScootersModal';
import TrickDiceModal from '../components/TrickDiceModal';


export default function Home() {

  const {ref, inView} = useInView();
  
  const [send, setSend] = useState(false);
  const[name,setName]=useState("");
  const[message, setMessage]=useState("");
  const[email,setEmail]=useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  useEffect(()=>{
    console.log(inView);
  },[inView]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (name != "" || email != "" || message != "") {
      setSend(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setSend(false);
    }
  }

  const openModal = (index) => {
    console.log("modal");
    setShowModal(prev => !prev);
    setModalIndex(index);
  }

  return (
    <div className={styles.container}>
      <Navbar/>
        <div className="content">
          <section id="hero-section">
            <article>
              <h1 className="heading-h1">
                Multimediedesigner
              </h1>
              <p>
                Multimediedesigner studerende i 3. semester, som har kompetence i webudvikling UX/UI,
                og er altid optimistik og på udkig efter forbedringer.
              </p>
              
                <button className="btn-style">
                  <LinkS activeClass="active" to='projekter-section' smooth={true} duration={500} spy={true} exact='true' offset={-120} >
                    Se mine projekter
                  </LinkS>
                </button>
              
            </article>
            <img src="/heroimage.png" />
            <div className="socials-hero">
                <ul>
                    <li className="social-hero-git">
                        <a href="https://github.com/Drescher-Rijna" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li className="social-hero-li">
                        <a href="https://www.linkedin.com/in/drescher-rijna/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li className="social-hero-ig">
                        <a href="https://www.instagram.com/thisisgisito/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>
          </section>

          <section id="om-mig-section">
            <h2 className="heading-h2">
              Hvem er Drescher Rijna?
            </h2>
            <div className="om-mig-photo">
              <img src="/Drescher_300x400px.png" />
            </div>
            <article>
              <p>
                Jeg er en multimediedesigner, som er specialeret i programmering og webudvikling.
                Jeg er en meget optimistisk person, som altid er klar på at lære noget nyt og tror på,
                at alting kan altid forbedres.
              </p>
              <p>
                Jeg har 1 års erfaring med programmering og webudvikling og har allerede arbejdede med mange forskellige sprog,
                som Javascript, ReactJS, NextJS, Flutter m.m. Udover det har jeg også prøvede at lave hjemmesider til virksomheder.
              </p>
              <p>
                I min fritid elsker jeg at være aktiv. Jeg styrketræner og dyrker rullesport specifikt køre jeg på løbehjul,
                hvor jeg lære mange forskellige vilde tricks. Hvilken nok er grunden til at jeg har mit optimistiske mindset, frygtløshed og gå på mod,
                når det kommer til at prøve noget nyt.
              </p>
            </article>
          </section>
          
          <section id="projekter-section">
            <h2 className="heading-h2">Projekter</h2>
              <div onClick={() => openModal(2)} className="gisitoscooters-area" >
                <GisitoScootersTilt />
              </div>
              {modalIndex == 2 ?
                <GisitoScootersModal showModal={showModal} setShowModal={setShowModal} /> : null
              }
              
              <div onClick={() => openModal(2)} className="toscoot-area" >
                <ToScootTilt />
              </div>
              {modalIndex == 1 ? 
                <ToScootModal showModal={showModal} setShowModal={setShowModal} /> : null
              }
              
              <div onClick={() => openModal(1)} className="trickdice-area" >
                <TrickDiceTilt />
              </div>
              {modalIndex == 4 ? 
                <TrickDiceModal showModal={showModal} setShowModal={setShowModal} /> : null
              }
              
              <div onClick={() => openModal(4)} className="dawinti-area">
                <DaWintiTilt />
              </div>
              {modalIndex == 3 ? 
                <DaWintiModal showModal={showModal} setShowModal={setShowModal}  /> : null
              }
              
          </section>
          <section ref={ref} id="skillset-section">
            <h2 className="skillset-section-titel heading-h2" >Skillset</h2>
            <div className="skills-container">
              <SkillsetMeter skill="HTML" level={90} imgUrl="/HTML.png" inView={inView} />
              <SkillsetMeter skill="CSS" level={90} imgUrl="/CSS.png" inView={inView} />
              <SkillsetMeter skill="JS" level={80} imgUrl="/JS.png" inView={inView} />
              <SkillsetMeter skill="ReactJS" level={70} imgUrl="/REACT.png" inView={inView} />
              <SkillsetMeter skill="NextJS" level={70} imgUrl="/NEXT.png" inView={inView} />
              <SkillsetMeter skill="Flutter" level={65} imgUrl="/FLUTTER.png" inView={inView} />
              <SkillsetMeter skill="WP" level={85} imgUrl="/WP.png" inView={inView} />
              <SkillsetMeter skill="Elementor" level={70} imgUrl="/ELEMENTOR.png" inView={inView} />
              <SkillsetMeter skill="Firebase" level={70} imgUrl="/FIREBASE.png" inView={inView} />
              <SkillsetMeter skill="Adobe XD" level={65} imgUrl="/XD.png" inView={inView} />
              <SkillsetMeter skill="Illustrator" level={50} imgUrl="/ILLUSTRATOR.png" inView={inView} />
              <SkillsetMeter skill="Photoshop" level={35} imgUrl="/PHOTOSHOP.png" inView={inView} />
            </div>
          </section>
          <section id="kontakt-mig-section">
            <h2 className="heading-h2">Kom i kontakt med mig</h2>
            <form className="kontakt-mig-form" method="post" action="none" accept-charset="ISO-8859-1" 
            onsubmit="var originalCharset = document.charset; document.charset = 'ISO-8859-1'; 
            window.onbeforeunload = function () {document.charset=originalCharset;};" >
              <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} name="realname" placeholder="Fulde navn" required />
              <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} name="email" placeholder="Email" required />
              <textarea required onChange={(e)=>{setMessage(e.target.value)}} value={message} name="Message" placeholder="Skriv en besked...">

              </textarea>
              <button className="btn-style" type="submit" value="Send" onSubmit={handleSubmit}>
                Send
              </button>
              <input type="hidden" name="recipient" value="drescherrijna@drescher-rijna.dk" /> 
              <input type="hidden" name="subject" value="Subject" /> 
              <input type="hidden" name="required" value="realname,email,Message" /> 
            </form>
            {send ?
              <div id="onSubmit-message" className={send ? "thank-you-style" : "error-style"}>
                {send ?
                  <p className="thank-you-message">
                    Tak for din besked. Jeg vil svare tilbage hurtigst muligt.
                  </p> :
                  <p className="error-message">
                    Der skete en fejl under sendelsen. Har du udfyldt alle felter korrekt?
                  </p>
                }
                
              </div> : ""
            }
          </section>
        </div>
    </div>
  )
}
