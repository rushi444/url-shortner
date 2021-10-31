import { useState } from 'react'
import { HStack, Button, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AnimatedSection } from 'components/AnimatedSection'
import { InputField } from 'components/InputField'
import { addHttps, schema } from './validationSchema'
import { UrlBox } from './UrlBox'

export const UrlForm = () => {
  const [shortUrl, setShortUrl] = useState<string>()

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: { url: string }) => {
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: addHttps(data.url) })
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
          <InputField
            name="url"
            control={control}
            placeholder="www.google.com/maps"
          />
          <Button type="submit" colorScheme="teal">
            Shorten
          </Button>
        </HStack>
        {errors?.url?.message ? (
          <Text textAlign="center" color="red.300" mt={1}>
            {errors.url.message}
          </Text>
        ) : null}
      </form>
      <UrlBox shortUrl={shortUrl} />
    </AnimatedSection>
  )
}
