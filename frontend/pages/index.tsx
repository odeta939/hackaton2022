import type { NextPage } from 'next'
import Image from 'next/image'
import image from '../Image/ideer.png'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.content}>
      <Image src={image} alt=""/>
    </div>
  )
}

export default Home
