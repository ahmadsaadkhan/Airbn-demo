import { useRouter } from "next/dist/client/router";
import Footer from "../Components/Footer"
import Header from "../Components/Header"

const Search = () => {
    const router = useRouter()
    console.log(router.query)
    const { location, startDate, endDate, noOfGuests} = router.query
    return ( 
        <div>
            <Header />
            <div className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p>300+ stays for 5 guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="styledButton">Cancellation Flexibility</p>
                        <p className="styledButton">Type od Place</p>
                        <p className="styledButton">Price</p>
                        <p className="styledButton">Room and Filters</p>
                        <p className="styledButton">More Filters</p>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
     );
}
 
export default Search;