import Link from 'next/link'
import { Box, Flex, Image } from '@chakra-ui/react'
import { RiArrowLeftSLine } from 'react-icons/ri'

export const Header = () => {
  const isContinentPage = false

  return (
    <Flex
      as="header"
      px="0.5"
      py="7"
      maxW="container.lg"
      mx="auto"
      justifyContent="space-between"
      alignItems="center"
    >
      {isContinentPage && (
        <Link href="/">
          <a aria-label="Retornar à página anterior.">
            <RiArrowLeftSLine fontSize="24px" color="#47585B" />
          </a>
        </Link>
      )}

      <Box mx="auto">
        <Image src="/logo.svg" alt="Worldtrip" alignSelf="center" />
      </Box>
    </Flex>
  )
}
