import useStore from '@/helpers/store'
import Head from 'next/head'
import { Badge } from '@pmndrs/branding'
import Go from '@/components/dom/go'
import dynamic from 'next/dynamic'

let Sphere = null
if (process.env.NODE_ENV === 'production') {
  Sphere = dynamic(() => import('@/components/canvas/Sphere'), {
    ssr: false,
  })
} else {
  Sphere = require('@/components/canvas/Sphere').default
}

const Dom = () => {
  return (
    <>
      <Head>
        <title>Sphere</title>
      </Head>
      <Go />
      <div className='absolute bottom-2 right-2 z-index-30'>
        <Badge />
      </div>
    </>
  )
}

const Page = () => {
  useStore.setState({ loading: false })
  return (
    <>
      <Sphere r3f />
      <Dom />
    </>
  )
}

export default Page
