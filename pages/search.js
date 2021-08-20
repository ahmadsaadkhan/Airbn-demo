import { useRouter } from "next/dist/client/router";
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { format } from 'date-fns'
import InfoCard from "../Components/InfoCard";

const Search = ({ searchResults }) => {
    const router = useRouter()
    console.log(router.query)
    const { location, startDate, endDate, noOfGuests } = router.query
    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")
    const range = `${formattedStartDate} - ${formattedEndDate}`
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
            <div className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p>300+ stays {range} -  for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="styledButton">Cancellation Flexibility</p>
                        <p className="styledButton">Type od Place</p>
                        <p className="styledButton">Price</p>
                        <p className="styledButton">Room and Filters</p>
                        <p className="styledButton">More Filters</p>
                    </div>
                    <div className="flex flex-col">

                        {searchResults && searchResults.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard img={img} location={location} title={title} description={description} star={star} price={price} total={total} key={img} />
                        ))}

                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Search;
export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
    return {
        props: {
            searchResults
        }
    }
}