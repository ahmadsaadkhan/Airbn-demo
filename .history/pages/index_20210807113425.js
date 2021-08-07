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
      <main className="max-w-7xl mx-auto sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

        </section>
      </main>
    </div>
  )
};

export async getStaticProps = () => {
  const exploreData = await fetch("https://links.papareact.com/pyp"),
  then{
    (res) => res.json()
  };
  return{
    props: {
      exploreData,
    }
  }
}
