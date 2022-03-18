import { Container, Flex, Image, Heading, Text, Box } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Carousel } from '../components/Carousel'
import { GetStaticProps } from 'next'

type Photo = {
  urls: {
    full: string
  }
}

type HomeProps = {
  data: Photo[]
}

const Home = (props: HomeProps) => {
  return (
    <>
      <Header />

      {/* Banner */}
      <Box
        h="80"
        mb="20"
        px="0.5"
        bgImage="/images/background.png"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Container
          maxW="container.lg"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box color="white">
            <Heading as="h1" fontSize="4xl" fontWeight="medium" mb="5">
              5 Continentes, <br /> Infinitas possibilidades
            </Heading>
            <Text fontSize="xl" color="gray.400">
              Chegou a hora de tirar do papel a viagem que você <br /> sempre
              sonhou.{' '}
            </Text>
          </Box>

          <Box pt="20">
            <Image
              src="/images/airplane.svg"
              alt="Ilustração de um avião em vôo."
            />
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Container as="main" maxW="container.lg" pb="10">
        <Flex
          as="section"
          alignItems="center"
          justifyContent="space-between"
          mb="14"
          pb="20"
          position="relative"
          _after={{
            content: '""',
            display: 'block',
            width: '24',
            height: '2px',
            bgColor: 'gray.600',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Flex direction="column" alignItems="center">
            <Image
              src="/images/cocktail.svg"
              alt="Ilustração de um coquetel."
            />
            <Text as="strong" mt="6" color="gray.600">
              vida noturna
            </Text>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Image
              src="/images/surf.svg"
              alt="Ilustração de uma prancha de surf com o sol ao fundo."
            />
            <Text as="strong" mt="6" color="gray.600">
              praia
            </Text>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Image src="/images/house.svg" alt="Ilustração de um edifício." />
            <Text as="strong" mt="6" color="gray.600">
              moderno
            </Text>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Image
              src="/images/classic.svg"
              alt="Ilustração de um monumento histórico."
            />
            <Text as="strong" mt="6" color="gray.600">
              clássico
            </Text>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Image
              src="/images/global.svg"
              alt="Ilustração do globo terrestre."
            />
            <Text as="strong" mt="6" color="gray.600">
              e mais...
            </Text>
          </Flex>
        </Flex>

        <Carousel photos={props.data} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const url = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=europe&count=5`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Não foi possível obter as fotos do continente europeu.')
    }

    const data = await response.json()

    return {
      props: {
        data,
      },
    }
  } catch (error: any) {
    console.log(`${error.name}: ${error.message}`)
  }

  return {
    props: {
      data: [],
    },
  }
}

export default Home
