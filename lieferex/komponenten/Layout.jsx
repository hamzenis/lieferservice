import Head from 'next/head'
import Navigation from '../komponenten/Navigation'
import Fusszeile from '../komponenten/Fusszeile'
import { Children } from 'react'

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>LieferEX - Deine Liefer Experten</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
      <Fusszeile />
    </div>
  )
}