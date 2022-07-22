import React, { ReactNode, useEffect } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Box } from '@mui/material'

type PropType = {
  options?: EmblaOptionsType
  slides: ReactNode[]
}

const sxEmbla = {
  overflow: 'hidden',
}

const sxEmblaContainer = {
  display: 'flex',
}

const sxEmblaSlide = {
  position: 'relative',
  flex: '0 0 20%',
}

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props
  const autoplay = Autoplay({ delay: 2000 });
  const [emblaRef] = useEmblaCarousel(options, [autoplay])

  return (
    <Box sx={sxEmbla} ref={emblaRef}>
      <Box sx={sxEmblaContainer}>
        {slides.map((slide, index) => (
          <Box sx={sxEmblaSlide} key={index}>
            {slide}
          </Box>
        ))}
      </Box>
    </Box>
  )
}