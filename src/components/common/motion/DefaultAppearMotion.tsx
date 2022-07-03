import { Box, Container } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
  children: any;
  delay: number;
}

export const DefaultAppearMotion = ({ children, delay }: IProps) => {
  const variants = {
    hidden: { opacity: 0, x: -50, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        type: "tween",
        stiffness: 100,
        default: { duration: .5 },
      }
    },    
  }

  return (
    <motion.div initial='hidden' animate='visible' variants={variants}>
      {children}
    </motion.div>
  )
}