import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: any;
  delay?: number;
  key?: string | number;
}



export const ScrollAppearMotion = ({ children, delay, key }: Props) => {
  const controls = useAnimation();  
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1, delay: delay ?? .4 }, x: 0 },
    hidden: { opacity: 0, x: -50 }
  };

  return (
    <motion.div ref={ref} key={key} variants={squareVariants} animate={controls} initial="hidden" >
      {children}
    </motion.div>
  )
}

export const ScrollAppearOpacityMotion = ({ children, delay }: Props) => {
  const controls = useAnimation();  
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1, delay: delay ?? .4 }, height: '100%'},
    hidden: { opacity: 0, height: '100%' }
  };

  return (
    <motion.div ref={ref} variants={squareVariants} animate={controls} initial="hidden">
      {children}
    </motion.div>
  )
}