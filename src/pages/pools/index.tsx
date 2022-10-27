import Pools from '@app/products/pools'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <>
      <Head>
        <title>Grimace Staking Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <Pools />
    </>
  )
}
