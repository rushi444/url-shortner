import { Box, Heading, Text } from '@chakra-ui/react'
import { AnimatedSection } from 'components/AnimatedSection'

export const Header = () => {
  return (
    <AnimatedSection delay={0.1}>
      <Box textAlign="center" mb={4}>
        <Heading as="h1">World&apos;s fastest URL shortener </Heading>
        <Heading as="h1">
          running on{' '}
          <Text as="span" color="teal.200">
            the Edge
          </Text>
        </Heading>
      </Box>
    </AnimatedSection>
  )
}
