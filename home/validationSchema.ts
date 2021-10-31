import * as yup from 'yup'

export const addHttps = (url: string = ''): string => {
  if (url.includes('http://') || url.includes('https://')) {
    return url
  }
  return `https://${url}`
}

export const schema = yup.object({
  url: yup
    .string()
    .required('URL is required')
    .typeError('URL is required')
    .transform(v => addHttps(v))
    .url('Invalid URL')
})
