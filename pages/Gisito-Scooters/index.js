import Link from 'next/link';

const GisitoScooters = () => {  
    return (
      <>
        <header>
            
            <div className="logo" >
                <Link href='/'>Logo</Link>
            </div> 

        </header>
        <div className="content">
          <h1>
            GISITO SCOOTERS
          </h1>
        </div>
      </>
    )
}

export default GisitoScooters;