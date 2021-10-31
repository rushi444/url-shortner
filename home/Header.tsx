import { Box, Heading, Text } from '@chakra-ui/react'
import { AnimatedSection } from 'components/AnimatedSection'

export const Header = () => {
  return (
    <AnimatedSection delay={0.1}>
      <Box
        textAlign="center"
        mb={4}
        w={{ base: '90vw', md: '70vw', lg: '50vw' }}
      >
        <Heading as="h1">
          The world&apos;s fastest URL shortener running on{' '}
          <Text as="span" color="teal.200">
            the Edge
          </Text>
        </Heading>
      </Box>
    </AnimatedSection>
  )
}
