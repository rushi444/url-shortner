import React, { useState } from 'react'
import {
  Container,
  Heading,
  Text,
  Button,
  Input,
  Box,
  HStack,
  Center
} from '@chakra-ui/react'

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
    <Center h="100vh">
      <Box>
        <Heading as="h1">
          Shorten URLs on{' '}
          <Text as="span" color="teal.200">
            the Edge
          </Text>
        </Heading>
        <form onSubmit={onSubmit}>
          <HStack>
            <Input value={value} onChange={e => setValue(e.target.value)} />
            <Button type="submit" colorScheme="teal">
              Shorten
            </Button>
          </HStack>
        </form>
        {shortUrl ? (
          <Box>
            <a href={shortUrl}>{shortUrl}</a>
          </Box>
        ) : null}
      </Box>
    </Center>
  )
}

export default Home
