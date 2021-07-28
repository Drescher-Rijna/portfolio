import Link from 'next/link';

const ToScoot = () => {  
    return (
      <>
        <header>
            
            <div className="logo" >
                <Link href='/'>Logo</Link>
            </div> 

        </header>
        <div className="content">
          <h1>
            TOSCOOT
          </h1>
        </div>
      </>
    )
}

export default ToScoot;