import React, { useState } from 'react'
import {
  Heading,
  Text,
  Button,
  Input,
  Box,
  HStack,
  Center,
  Spacer,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'

import { AnimatedSection } from 'components/AnimatedSection'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [value, setValue] = useState('')
  const [shortUrl, setShortUrl] = useState<string>()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: value })
    })
    const data = await response.json()
    setShortUrl(
      `${document.location.protocol}//${document.location.host}/${data.short}`
    )
  }

  return (
    <Center h="100vh" bg="blackAlpha.900">
      <Box>
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
        <AnimatedSection delay={0.3}>
          <form onSubmit={onSubmit}>
            <HStack>
              <InputGroup>
                <InputLeftAddon>https://</InputLeftAddon>
                <Input value={value} onChange={e => setValue(e.target.value)} />
              </InputGroup>
              <Button type="submit" colorScheme="teal">
                Shorten
              </Button>
            </HStack>
          </form>
          {shortUrl ? (
            <Box>
              <a href={shortUrl}>{shortUrl}</a>
            </Box>
          ) : null}{' '}
        </AnimatedSection>
        <Spacer h="15rem" />
      </Box>
    </Center>
  )
}

export default Home
