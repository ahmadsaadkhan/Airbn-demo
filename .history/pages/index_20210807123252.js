import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import SmallCard from '../Components/SmallCard';

export default function Home({ exploreData }) {
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
          <div className="grid">
            {exploreData.map((item) => (
              <SmallCard image={item.img} distance={item.distance} location={item.location} key={item.img} />
            ))}
          </div>


        </section>
      </main>
    </div>
  )
};

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then(
      (res) => res.json()
    );
  return {
    props: {
      exploreData,
    }
  }
}
