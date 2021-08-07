import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Air Bnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  )
}
