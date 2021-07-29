import Tilt from 'react-parallax-tilt';
import mockup from '../public/dawinti-mockup.png';

const DaWintiTilt = () => {
    return (
        <Tilt className="Tilt tilt-dawinti" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7}  >
            <div className="Tilt-inner tilt-inner-dawinti"> 
                <article className="tilt-desc-dawinti">
                    <img src="/JS.png" />

                    <p>
                        Nyt logodesign og hjemmeside i samarbejde med Da Winti
                    </p>
                </article>
            
                <div className="project-container-dawinti">
                    <div className="dawinti-mockup">

                    </div>
                </div>
            </div>
       </Tilt> 
    )
}

export default DaWintiTilt;