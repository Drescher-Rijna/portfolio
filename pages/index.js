import styles from '../styles/Home.module.css'
import GisitoScootersTilt from '../components/GisitoScootersTilt'
import ToScootTilt from '../components/ToScootTilt'
import TrickDiceTilt from '../components/TrickDiceTilt'
import DaWintiTilt from '../components/DaWintiTilt'
import SkillsetMeter from '../components/SkillsetMeter'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {

  const {ref, inView} = useInView();

  useEffect(()=>{
    console.log(inView);
  },[inView]);

  return (
    <div className={styles.container}>
      <Navbar/>
        <div className="content">
          <section id="hero-section">
            <img src="/heroimage.png" />
          </section>

          <section id="om-mig-section">
            <h2>
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
            <Link href='/Gisito-Scooters' exact>
              <div className="gisitoscooters-area">
                <GisitoScootersTilt />
              </div>
            </Link>
            <Link href='/ToScoot' exact>
              <div className="toscoot-area">
                <ToScootTilt />
              </div>
            </Link>
            <Link href='/Trick-Dice' exact>
              <div className="trickdice-area">
                <TrickDiceTilt />
              </div>
            </Link>
            <Link href='/Da-Winti' exact>
              <div className="dawinti-area">
                <DaWintiTilt />
              </div>
            </Link>
          </section>
          <section ref={ref} id="skillset-section">
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
            <h2>Kom i kontakt med mig</h2>
            <form className="kontakt-mig-form">
              <input type="text" placeholder="Fornavn" />
              <input type="text" placeholder="Efternavn" />
              <input type="text" placeholder="Email" />
              <textarea placeholder="Skriv en besked...">

              </textarea>
              <button type="submit">
                Send
              </button>
            </form>
          </section>
        </div>
    </div>
  )
}
