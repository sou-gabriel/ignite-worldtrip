import { Flex, Heading, Text } from '@chakra-ui/react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './styles.module.css'

type Photo = {
  urls: {
    full: string
  }
}

type CarouselProps = {
  photos: Photo[]
}

export const Carousel = ({ photos }: CarouselProps) => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={styles.swiper}
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
            color="white"
            bgImage={photo.urls.full}
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Heading as="h2" mb="4" fontSize="5xl" fontWeight="bold">
              Europa
            </Heading>
            <Text fontWeight="700" fontSize="2xl">
              O continente mais antigo...
            </Text>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
