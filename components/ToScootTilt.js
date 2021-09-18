import Tilt from 'react-parallax-tilt';
import { motion, useAnimation } from "framer-motion"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ToScootTilt = () => {

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
            <motion.div animate={animation}>
            <Tilt className="Tilt tilt-toscoot" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7}  >
                <div className="Tilt-inner tilt-inner-toscoot"> 
                    <article className="tilt-desc-toscoot">
                        <h3 className="heading-h3">    
                            TOSCOOT
                        </h3>
                        <p>
                            Performance tracker app for løbehjulsudøvere til, at holde styr på og optimere sin progression.
                        </p>
                        <img src="/toscoot-logo-transparent.svg" width="120" />
                    </article>
                
                    <div className="project-container-toscoot">
                        <img src="/toscoot-mockup-glossy.webp" className="mockup-toscoot"/>
                    </div>
                </div>
            </Tilt>
        </motion.div>
        </div>
        
        
    )
}

export default ToScootTilt;