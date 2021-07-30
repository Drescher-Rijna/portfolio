import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

const TrickDiceTilt = () => {
    return (
        <Tilt className="Tilt tilt-trickdice" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7} >
            <div className="Tilt-inner tilt-inner-trickdice"> 
                <article className="tilt-desc-trickdice">
                    <h3>    
                        TRICK DICE
                    </h3>
                    <p>
                        Løbehjulsterninger i lommen til at afholde sjove konkurrencer med sine venner.
                    </p>
                    <img src="/trick-dice-logo.png" width="120" />
                </article>
            
                <div className="project-container-trickdice">
                    <video autoPlay muted loop className="mockup-trickdice">
                        <source src="/trickdice-mock.webm" type="video/webm" />
                    </video>
                </div>
            </div>
       </Tilt>
    )
}

export default TrickDiceTilt;