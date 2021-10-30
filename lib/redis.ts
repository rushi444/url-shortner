import upstash from '@upstash/redis'

const redis = upstash(
  process.env.UPSTASH_REDIS_REST_URL,
  process.env.UPSTASH_REDIS_REST_TOKEN
)

const getShort = (): string => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return [...new Array(8)]
    .map(() => alpha[Math.floor(Math.random() * alpha.length)])
    .join('')
}

export const setUrl = async (url: string): Promise<string> => {
  const short = getShort()
  await redis.set(`short/${short}`, url)
  return short
}

export const getUrl = async (short: string): Promise<string> => {
  const { data } = await redis.get(`short/${short}`)
  return data
}
