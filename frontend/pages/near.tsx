import type { NextPage } from 'next'
import Image from 'next/image'
import image from '../Image/sok.png'
import styles from '../styles/Home.module.css'

const Near: NextPage = () => {
    return (
        <div>
            <Image src={image} alt=""/>
        </div>
    )
}

export default Near