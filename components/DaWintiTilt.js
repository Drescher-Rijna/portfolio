import Tilt from 'react-parallax-tilt';
import { motion, useAnimation } from "framer-motion"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const DaWintiTilt = () => {

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
          animation.start({x: '100vw'});
        }
    },[inView]);

    return (
        <div ref={ref}>
            <motion.div  animate={animation}>
                <Tilt className="Tilt tilt-dawinti" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7}  >
                    <div animate={animation} className="Tilt-inner tilt-inner-dawinti"> 
                        <article className="tilt-desc-dawinti">
                            <img src="/dawinti-logo.webp" width="120" />

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
            </motion.div>
        </div>
        
         
    )
}

export default DaWintiTilt;