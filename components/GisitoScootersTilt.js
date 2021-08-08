import Tilt from 'react-parallax-tilt';
import { motion, useAnimation } from "framer-motion"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const GisitoScootersTilt = () => {

    const animation = useAnimation();
    const {ref, inView} = useInView();

    useEffect(()=>{
        console.log(inView);
        if(inView) {
          animation.start({
            x: 0,
            transition: {
              type: 'spring', duration: 1.5, bounce: 0.2,
            }
          });
        }
    
        if(!inView) {
          animation.start({x: '-100vw'});
        }
    },[inView]);

    return (
        <div ref={ref}>
            <motion.div  animate={animation}>
                <Tilt className="Tilt tilt-gisitoscooters" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7}  >
                    <div className="Tilt-inner tilt-inner-gisitoscooters"> 
                        <article className="tilt-desc-gisitoscooters">
                            <img src="/logo-gisito.png" />
                            <p>
                                Løbehjul webshop med stort galleri af Løbehjul, dele og beskyttelse til alle riders
                            </p>
                        </article>
                    
                        <div className="project-container-gisitoscooters">
                            <div className="gisitoscooters-mockup">

                            </div>      
                        </div>
                    </div>
                </Tilt>
            </motion.div>
        </div>
        
        
    )
}

export default GisitoScootersTilt;