import React from 'react'
import Head from 'next/head'
import '../../src/app/globals.css'
import styles  from './Main.module.css'
import Link from 'next/link'
import  'bootstrap-icons/font/bootstrap-icons.css'
export default function Layout({children, title, description}) {
  return (
    <div >
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
      <header className={styles.topbar}>
        <div><b><i className={`bi bi-window-split`}></i> NextJS - </b>  Dashboard</div>
        <div> <button className={styles.dashBtPrimary}>LogIn / LogOut</button></div>
         
      </header>
      <main className={styles.main}>
        <nav className={styles.sidebar}>
          <ul>
            <li className={styles.item} ><Link href="/about"  className={styles.active} ><i className={`bi bi-grid-1x2 ${styles.icon}`}></i> <span></span></Link></li>
            <li className={styles.item} ><Link href="/about" ><i className={`bi bi-graph-up ${styles.icon}` } ></i> <span></span></Link></li>
            <li className={styles.item} ><Link href="/about" ><i className={`bi bi-journal-text ${styles.icon}`}></i> <span></span></Link></li>
            <li className={styles.item} ><Link href="/about" ><i className={`bi bi-table  ${styles.icon}`}></i> <span></span></Link></li>
          </ul>
        </nav>
        <div className={'container'}>
           {children}
        </div>           
      </main>
    </div>
  )
}