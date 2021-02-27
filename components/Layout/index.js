import styles from './styles.module.css'
import Head from 'next/head'
import React from 'react';

export default function Home({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arròs Tramuntana</title>
        <link rel="icon" href="/images/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <img className={styles.banner} src='/images/banner.jpg' />
        <img className={styles.cigonya} src='/images/cigonya.jpg' />

        <h1 className={styles.title}>
          Arròs Tramuntana
        </h1>

        <p className={styles.description}>
          Conreu i venta d'arròs, als Aiguamolls de l'Empordà, entre Riumors i Castelló d'Empúries, Alt Empordà.
        </p>

        <ul className={styles.menu}>
          <li><a href="/">Varietats</a></li>
          <li><a href="/comprar">Comprar</a></li>
          <li><a href="https://arros-tramuntana.tumblr.com/" target="_blank">Blog</a></li>
          <li><a href="https://www.facebook.com/arrostramuntana" target="_blank">Facebook</a></li>
          <li><a href="/contacte">Contacte</a></li>
        </ul>
      </main>

      {children}

      <footer className={styles.footer}>
        © Arròs Tramuntana 2021
      </footer>
    </div>
  );
}
