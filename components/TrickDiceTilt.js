import Tilt from 'react-parallax-tilt';
import { motion, useAnimation } from "framer-motion"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TrickDiceTilt = () => {

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
                <Tilt className="Tilt tilt-trickdice" tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} scale={1} glareMaxOpacity={0.7} >
                    <div className="Tilt-inner tilt-inner-trickdice"> 
                        <article className="tilt-desc-trickdice">
                            <h3 className="heading-h3">    
                                TRICK DICE
                            </h3>
                            <p>
                                Løbehjulsterninger i lommen til at afholde sjove konkurrencer med sine venner.
                            </p>
                            <img src="/trick-dice-logo.webp" width="120" />
                        </article>
                    
                        <div className="project-container-trickdice">
                            <video autoPlay muted loop className="mockup-trickdice">
                                <source src="/trickdice-mock.webm" type="video/webm" />
                            </video>
                        </div>
                    </div>
                </Tilt>
            </motion.div>
        </div>
        
        
    )
}

export default TrickDiceTilt;