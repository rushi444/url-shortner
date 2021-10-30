import { Center, Box, Spacer } from '@chakra-ui/react'

import { Header } from 'home/Header'
import { UrlForm } from 'home/UrlForm'

export const Home = () => {
  return (
    <Center h="100vh" bg="blackAlpha.900">
      <Box>
        <Header />
        <UrlForm />
        <Spacer h="15rem" />
      </Box>
    </Center>
  )
}
