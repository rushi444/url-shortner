import { ChakraProvider } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
})
