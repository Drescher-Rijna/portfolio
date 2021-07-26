import Tilt from 'react-parallax-tilt';


const ToScootTilt = () => {
    return (
        <Tilt className="Tilt tilt-toscoot" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7}  >
            <div className="Tilt-inner"> 
                
            </div>
       </Tilt>
    )
}

export default ToScootTilt;