import Tilt from 'react-parallax-tilt';

const GisitoScootersTilt = () => {
    return (
        <Tilt className="Tilt tilt-gisitoscooters" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7}  >
            <div className="Tilt-inner tilt-inner-gisitoscooters"> 
                <article className="tilt-desc-gisitoscooters">
                    <h2>    
                        GISITO SCOOTERS
                    </h2>
                    <p>
                        Løbehjulsterninger i lommen til at afholde sjove konkurrencer med sine venner.
                    </p>
                    <img width="100" src="/JS.png" />
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