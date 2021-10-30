import { useState } from 'react'
import {
  HStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  Box
} from '@chakra-ui/react'

import { AnimatedSection } from 'components/AnimatedSection'

export const UrlForm = () => {
  const [value, setValue] = useState('')
  const [shortUrl, setShortUrl] = useState<string>()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: `https://${value}` })
    })
    const data = await response.json()
    setShortUrl(
      `${document.location.protocol}//${document.location.host}/${data.short}`
    )
  }
  return (
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
  )
}
