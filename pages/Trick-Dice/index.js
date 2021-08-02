import Link from 'next/link';

const TrickDice = () => {  
    return (
      <>
        <header className="header-detail-page">
            
            <div className="logo-detail-page" >
                <Link href='/'>
                  <img src="/logo-black-white.png" />
                </Link>
            </div> 

        </header>
        <div className="content">
          <h1>
            TRICK DICE
          </h1>
        </div>
      </>
    )
}

export default TrickDice;