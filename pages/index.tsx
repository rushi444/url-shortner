import { Home as HomeContainer } from 'home'
import NoSSr from 'components/NoSSR'

import type { NextPage } from 'next'

const Home: NextPage = () => (
  <NoSSr>
    <HomeContainer />
  </NoSSr>
)

export default Home
