import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
        <div className="content">
          <h1>CONTENT</h1>
        </div>
      <Footer/>
    </div>
  )
}
