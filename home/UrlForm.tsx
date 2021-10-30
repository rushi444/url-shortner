import { useState } from 'react'
import { HStack, Button, Box } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { AnimatedSection } from 'components/AnimatedSection'
import { InputField } from 'components/InputField'

export const UrlForm = () => {
  const [shortUrl, setShortUrl] = useState<string>()

  const { handleSubmit, control } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data: { url: string }) => {
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: `https://${data.url}` })
    })
    const res = await response.json()
    setShortUrl(
      `${document.location.protocol}//${document.location.host}/${res.short}`
    )
  }
  return (
    <AnimatedSection delay={0.3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack>
          <InputField name="url" control={control} rules={{ required: true }} />
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
