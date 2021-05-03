import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss';
import Button from '../componentes/Button';
import GitHub from '../componentes/Icons/GitHub';

export default function Home() {
  return (
    <section className={styles.home}>
      <h1>devtalk</h1>
      <Button>
        Log In with GitHub
        <GitHub width={24} height={24} />
      </Button>
    </section>
  )
}
