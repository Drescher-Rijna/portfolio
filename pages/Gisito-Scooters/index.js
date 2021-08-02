import Link from 'next/link';

const GisitoScooters = () => {  
    return (
      <>
        <header className="header-detail-page">
            
            <div className="logo-detail-page" >
                <Link href='/'>
                  <img src="/logo-black-white.png" />
                </Link>
            </div> 
            <div>
              <button>
                Kom i kontakt
              </button>
              <div>

              </div>
            </div>
        </header>
        <div className="content">
          <section id="gisito-intro">
            
            <article id="overblik-tekst-gisito">
              <h1>
                GISITO SCOOTERS: LØBEHJUL WEB BUTIK
              </h1>
              <p>
                Mig og en medstuderende fik til opgave fra kunst- og kulturhuset Da Winti i Selde,
                at give dem en ny visuel identitet som repræsentere dem og hvad de står for, en hjemmeside
                som har et stærkt sammenhæng med den nye identitet og hjælpe dem med at styrke deres online tilstedeværelse.
              </p>
              <p>
                Vi fik byggede dem en ny hjemmeside på WordPress med brug af Elementor og gav dem også et nyt logodesign.
                Derudover kodet vi Da Winti's helt eget plugin med en bookingformular og en pris beregner der er kompatibel med 
                Elementor, så de ikke skulle betale for et Plugin.
              </p>
            </article>

            <div id="gisito-project-link">
              <div id="gisito-siden">
                <h4>
                  Du kan besøge hjemmesiden på:
                </h4>
                <a href="https://gisito-scooters-nextjs.vercel.app/" target="_blank" className="detail-project-link">
                    www.gisito-scooters-nextjs.vercel.app/
                </a>
              </div>
              <div id="gisito-github">
                <h4>
                  Du kan se kildekoden for Gisito Scooters på Github:
                </h4>
                <a href="https://github.com/Drescher-Rijna/gisito-scooters-nextjs" target="_blank" className="detail-project-link">
                  www.github.com/Drescher-Rijna/gisito-scooters-nextjs
                </a>
              </div>
            </div>

            
          </section>
        </div>
      </>
    )
}

export default GisitoScooters;