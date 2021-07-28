import Tilt from 'react-parallax-tilt';

const TrickDiceTilt = () => {
    return (
        <Tilt className="Tilt tilt-trickdice" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7} >
            <div className="Tilt-inner tilt-inner-trickdice"> 
                <article className="tilt-desc-trickdice">
                    <h2>    
                        TRICK DICE
                    </h2>
                    <p>
                        Løbehjulsterninger i lommen til at afholde sjove konkurrencer med sine venner.
                    </p>
                    <img width="100" src="/JS.png" />
                </article>
            
                <div className="project-container-trickdice">
                    <video autoPlay loop className="mockup-trickdice">
                        <source src="/mockup-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
       </Tilt>
    )
}

export default TrickDiceTilt;