import { setUrl } from 'lib/redis'

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req?.body?.url || ''
  if (url) {
    const short = await setUrl(url)
    return res.status(200).json({ url, short })
  }
  return res.status(400).json({ message: 'A url is required...' })
}

export default handler
