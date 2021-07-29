import Tilt from 'react-parallax-tilt';

const GisitoScootersTilt = () => {
    return (
        <Tilt className="Tilt tilt-gisitoscooters" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7}  >
            <div className="Tilt-inner tilt-inner-gisitoscooters"> 
                <article className="tilt-desc-gisitoscooters">
                    <h3>    
                        GISITO SCOOTERS
                    </h3>
                    <p>
                        Løbehjul webshop med stort galleri af Løbehjul, dele og beskyttelse til alle riders
                    </p>
                    <img src="/JS.png" />
                </article>
            
                <div className="project-container-gisitoscooters">
                    <div className="gisitoscooters-mockup">

                    </div>      
                </div>
            </div>
       </Tilt>
    )
}

export default GisitoScootersTilt;