import { Center, Box, Spacer } from '@chakra-ui/react'

import { Header } from 'home/Header'
import { UrlForm } from 'home/UrlForm'

export const Home = () => {
  return (
    <Center h="100vh" bg="blackAlpha.900" px={4}>
      <Box>
        <Header />
        <Center>
          <UrlForm />
        </Center>
        <Spacer h={{ base: '20rem', md: '15rem', lg: '10rem' }} />
      </Box>
    </Center>
  )
}
