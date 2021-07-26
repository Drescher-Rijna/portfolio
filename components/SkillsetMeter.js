import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";



const SkillsetMeter = ({imgUrl, skill, level, inView}) => {    

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
    const logo_pos = `${level-8}%`;

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