import Link from 'next/link';

const TrickDice = () => {  
    return (
      <>
        <header>
            
            <div className="logo" >
                <Link href='/'>Logo</Link>
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