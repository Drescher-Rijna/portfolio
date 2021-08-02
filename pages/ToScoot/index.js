import Link from 'next/link';

const ToScoot = () => {  
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
            TOSCOOT
          </h1>
        </div>
      </>
    )
}

export default ToScoot;