import type { NextPage } from 'next'
import Image from 'next/image'
import image from '../Image/badstue.png'
import styles from '../styles/Home.module.css'

const Table: NextPage = () => {
    return (
        <div>
            <Image src={image} alt=""/>
        </div>
    )
}

export default Table