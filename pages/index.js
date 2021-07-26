import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GisitoScootersTilt from '../components/GisitoScootersTilt'
import ToScootTilt from '../components/ToScootTilt'
import TrickDiceTilt from '../components/TrickDiceTilt'
import DaWintiTilt from '../components/DaWintiTilt'
import SkillsetMeter from '../components/SkillsetMeter'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'

export default function Home() {

  const {ref, inView} = useInView();

  useEffect(()=>{
    console.log(inView);
  },[inView]);

  return (
    <div className={styles.container}>
        <div className="content">
          <section id="hero-section">
            <img src="/heroimage.jpeg" />
          </section>

          <section id="om-mig-section">
            <div>
              Billed af mig
            </div>
            <article>
              <p>
                Tekst hvem jeg er
              </p>
            </article>
          </section>
          <section id="projekter-section">
            <GisitoScootersTilt />
            <ToScootTilt />
            <TrickDiceTilt />
            <DaWintiTilt />
          </section>
          <section ref={ref} id="skillset-section">
            <div className="skills-container">
              <SkillsetMeter skill="HTML" level={90} imgUrl="/HTML.png" inView={inView} />
              <SkillsetMeter skill="CSS" level={90} imgUrl="/CSS.png" inView={inView} />
              <SkillsetMeter skill="JS" level={80} imgUrl="/JS.png" inView={inView} />
              <SkillsetMeter skill="ReactJS" level={70} imgUrl="/REACT.png" inView={inView} />
              <SkillsetMeter skill="NextJS" level={70} imgUrl="/NEXT.png" inView={inView} />
              <SkillsetMeter skill="Flutter" level={65} imgUrl="/FLUTTER.png" inView={inView} />
              <SkillsetMeter skill="PHP" level={20} imgUrl="/PHP.png" inView={inView} />
              <SkillsetMeter skill="WP" level={85} imgUrl="/WP.png" inView={inView} />
              <SkillsetMeter skill="Elementor" level={70} imgUrl="/ELEMENTOR.png" inView={inView} />
              <SkillsetMeter skill="Firebase" level={70} imgUrl="/FIREBASE.png" inView={inView} />
              <SkillsetMeter skill="MySQL" level={15} imgUrl="/MYSQL.png" inView={inView} />
              <SkillsetMeter skill="Adobe XD" level={65} imgUrl="/XD.png" inView={inView} />
              <SkillsetMeter skill="Illustrator" level={50} imgUrl="/ILLUSTRATOR.png" inView={inView} />
              <SkillsetMeter skill="Photoshop" level={35} imgUrl="/PHOTOSHOP.png" inView={inView} />
              <SkillsetMeter skill="Unity" level={30} imgUrl="/UNITY.png" inView={inView} />
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
