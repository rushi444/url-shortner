import React, { useState } from 'react'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [value, setValue] = useState('https://www.rushicodes.com/')
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
    <div>
      {shortUrl ? (
        <div>
          <a href={shortUrl}>{shortUrl}</a>
        </div>
      ) : null}
      <form onSubmit={onSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">Shorten!</button>
      </form>
    </div>
  )
}

export default Home
