import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export const theme = extendTheme({
  styles,
  config
})
