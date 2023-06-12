import Link from 'next/link'


export default function Fusszeile() {
    return (
        <footer className="bg-dark text-center text-white">

            <div className="container p-4">

                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/hamzenis/lieferservice" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </section>

                <div className="d-flex mb-4 justify-content-center text-secondary text-white">
                    <h6>🥡 LieferEX | 📱 <a href="tel:0698363549" className="text-white">069 83 63 549</a> | ⏱️ 10:00 - 22:00</h6>
                </div>

                <section className="mb-4 text-white">
                    <p>
                        Projekt für das Modul <a href="http://mevius.de/ss_23_PPE.html">"Programming Exercices"</a><br></br> betreut von <a href="http://www.mevius.de">Herrn Mevius</a><br></br> an der <a href="https://www.frankfurt-university.de">Frankfurt University of Applied Sciences.</a>
                    </p>
                </section>

                <div className="text-center p-3 mb-4" >
                    <h4>© 2023 Copyright: </h4>
                </div>

                <section className="">

                    <div className="row">

                        <div className="col-4">
                            <h5 className="text-uppercase">Kejvi Hysenbelli</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="https://github.com/kejvi21" className="text-white">Github</a>
                                </li>
                                <li>
                                    <a href="mailto:kejvi.hysenbelli@stud.fra-uas.de" className="text-white">Email</a>
                                </li>
                            </ul>
                        </div>



                        <div className="col-4">
                            <h5 className="text-uppercase">Hamzenis Kryeziu</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="https://github.com/hamzenis/" className="text-white">Github</a>
                                </li>
                                <li>
                                    <a href="mailto:hamzenis.kryeziu@stud.fra-uas.de" className="text-white">Email</a>
                                </li>
                            </ul>
                        </div>



                        <div className="col-4">
                            <h5 className="text-uppercase">Hicham Boulaayad</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="https://github.com/Hicham-stud" className="text-white">Github</a>
                                </li>
                                <li>
                                    <a href="mailto:hicham.boulaayad@stud.fra-uas.de" className="text-white">Email</a>
                                </li>

                            </ul>
                        </div>


                    </div>



                    <div className="row p-5">
                        <div className="d-flex justify-content-center">
                            <div className="col-4">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link legacyBehavior href="/impressum">
                                            <a>
                                                Impressum
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/datenschutz">
                                            <a>
                                                Datenschutz
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                </section>

            </div>


        </footer>
    )
}