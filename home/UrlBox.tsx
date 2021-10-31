import { FC } from 'react'
import {
  Flex,
  Text,
  IconButton,
  Box,
  useClipboard,
  useToast
} from '@chakra-ui/react'
import { MdContentCopy } from 'react-icons/md'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { AnimatedSection } from 'components/AnimatedSection'

type UrlBoxProps = {
  shortUrl?: string
}

export const UrlBox: FC<UrlBoxProps> = ({ shortUrl = '' }) => {
  const { hasCopied, onCopy } = useClipboard(shortUrl)
  const toast = useToast()

  if (!shortUrl) return null
  return (
    <AnimatedSection delay={0.2}>
      <Flex
        p="0.5rem !important"
        justifyContent="space-between"
        mt={2}
        borderRadius="10px"
        bg="gray.900"
      >
        <Text
          as="a"
          href={shortUrl}
          target="_blank"
          rel="noreferrer noopener"
          color="teal.300"
          variant="link"
        >
          {shortUrl}
        </Text>
        <Box>
          <IconButton
            aria-label="copy"
            icon={<MdContentCopy />}
            size="xs"
            variant={hasCopied ? 'solid' : 'outline'}
            colorScheme="teal"
            mx={1}
            onClick={() => {
              onCopy()
              toast({
                title: 'URL copied to clipboard!',
                status: 'success',
                duration: 3000,
                variant: 'subtle'
              })
            }}
          />
          <IconButton
            aria-label="open in new tab"
            icon={<HiOutlineExternalLink />}
            size="xs"
            variant="outline"
            colorScheme="teal"
            mx={1}
            onClick={() => window.open(shortUrl)}
          />
        </Box>
      </Flex>
    </AnimatedSection>
  )
}
