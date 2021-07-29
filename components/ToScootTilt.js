import Tilt from 'react-parallax-tilt';


const ToScootTilt = () => {
    return (
        <Tilt className="Tilt tilt-toscoot" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7}  >
            <div className="Tilt-inner tilt-inner-toscoot"> 
                <article className="tilt-desc-toscoot">
                    <h3>    
                        TOSCOOT
                    </h3>
                    <p>
                        Performance tracker app for løbehjulskøre til at holde styr på og optimere sin progression.
                    </p>
                    <img src="/JS.png" />
                </article>
            
                <div className="project-container-toscoot">
                    <img src="/toscoot-mockup.png" className="mockup-toscoot"/>
                </div>
            </div>
       </Tilt>
    )
}

export default ToScootTilt;