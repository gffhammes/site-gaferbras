import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Container, Stack } from '@mui/material'
import { useCallback } from 'react'
import Image from 'next/image'
import RightArrow from '../../../../public/vectors/right-arrow-black.svg'
import LeftArrow from '../../../../public/vectors/left-arrow-black.svg'

type Props = {}

const sxEmbla = {
  overflow: 'hidden',
}

const sxEmblaContainer = {
  display: 'flex',
  alignItems: 'center',
}

const sxEmblaSlide = {
  position: 'relative',
  flex: {
    xs: '0 0 90%',
    sm: '0 0 75%',
    md: '0 0 60%',
  },
  maxWidth: '1120px',
  mr: 2
}

const slides = [
  '/images/gaferbras-1.jpg',
  '/images/gaferbras-1.jpg',
  '/images/gaferbras-1.jpg',
  '/images/gaferbras-1.jpg',
  '/images/gaferbras-1.jpg',
  '/images/gaferbras-1.jpg',
]

const Slider = (props: Props) => {  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, draggable: false })
  const [selectedSlide, setSelectedSlide] = useState(0)
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  emblaApi?.on('select', () => {
    setSelectedSlide(emblaApi.selectedScrollSnap())
  })


  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={sxEmbla} ref={emblaRef}>
        <Box sx={sxEmblaContainer}>
          {slides.map((slide, index) => {
            const isActiveSlide = index === selectedSlide;
            return (
              <Box sx={sxEmblaSlide} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    transition: '600ms ease all',
                    height: isActiveSlide ? { xs: '20rem', md: '30rem' } : { xs: '15rem', md: '25rem' },
                    my: isActiveSlide ? 0 : 5,
                    backgroundColor: '#363636'
                  }}
                >
                  <Image
                    src={slide}
                    alt='Gaferbras'
                    layout='fill'
                    objectFit='cover'
                  />
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', width:'100%', top: '50%', transform: 'translateY(-50%)' }}>        
        <Container maxWidth={false} sx={{ maxWidth: '1000px', width: { xs: '90%', sm: '75%', md: '60%' } }} >
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width: '100%' }}>
            <Box onClick={scrollPrev} sx={{ cursor: 'pointer' }}>
              <LeftArrow />
            </Box>
            <Box onClick={scrollNext} sx={{ cursor: 'pointer' }}>
              <RightArrow />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Slider