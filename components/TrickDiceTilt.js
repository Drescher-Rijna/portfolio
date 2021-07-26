import Tilt from 'react-parallax-tilt';

const TrickDiceTilt = () => {
    return (
        <Tilt className="Tilt tilt-trickdice" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7} >
            <div className="Tilt-inner"> 
            
            </div>
       </Tilt>
    )
}

export default TrickDiceTilt;