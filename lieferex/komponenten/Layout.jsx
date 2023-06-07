import Head from 'next/head'
import Navigation from '../komponenten/Navigation'
import Fusszeile from '../komponenten/FusszeileNeu'


export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>LieferEX - Dein Lieferservice</title>
                <meta name="description" content="Lieferservice aus FFM - FRA UAS ProgEX Mevius" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <div className='container'>
                {children}
            </div>
            <Fusszeile />
        </div>
    )
}