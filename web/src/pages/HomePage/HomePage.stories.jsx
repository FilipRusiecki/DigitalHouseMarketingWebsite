export const metadata = {
  title: 'Home',
}

import HomePage from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
}

export const generated = () => {
  return <HomePage />
}
