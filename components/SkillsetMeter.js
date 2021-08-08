import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react";



const SkillsetMeter = ({imgUrl, skill, level, inView}) => {    

    const [screenSize, setScreenSize] = useState();
    const [logoPosOffset, setLogoPosOffset] = useState(10);
    
    useEffect(() => {
        setScreenSize(window.innerWidth);
    },[]);

    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth);
            console.log(screenSize);

            if(screenSize < 480) {
                setLogoPosOffset(8)
            }
            
            if(screenSize > 480 || screenSize == 480) {
                setLogoPosOffset(5)
            }

            if(screenSize > 640 || screenSize == 640) {
                setLogoPosOffset(7)
            }

            if(screenSize > 720 || screenSize == 640) {
                setLogoPosOffset(5)
            }

            if(screenSize > 1024 || screenSize == 1024) {
                setLogoPosOffset(15)
            }

            if(screenSize > 1200 || screenSize == 1200) {
                setLogoPosOffset(12)
            }

            console.log(logoPosOffset);
            
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[screenSize]);

    const animation = useAnimation();
    const logoAnimation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start({
                width: bar_width,
                transition: {
                    duration: 1, 
                }
            });
            logoAnimation.start({
                left: logo_pos,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView) {
            animation.start({
                width: 0
            })
            logoAnimation.start({
                left: 0
            });
        }
    },[inView]);

    const bar_width = `${level}%`;
    const logo_pos = `${level-logoPosOffset}%`;

    return (
        <div className="skillset-container">
            <div className="level-meter-container">
                <motion.div className="skill-logo" animate={logoAnimation}>
                    <img src={imgUrl} alt={skill + " logo"}/>
                </motion.div>
                <div className="level-meter">
                    <motion.div className="level-score" animate={animation} />
                </div>
            </div>
            <ul className="levels">
                <li>
                    Basic
                </li>
                <li>
                    Øvede
                </li>
                <li>
                    Ekspert
                </li>
            </ul>
        </div>
    )
}

export default SkillsetMeter;