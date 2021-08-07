import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600] 2xl:h-[700px]">
            <Image
            src="https://links.papareact.com/0fm"
            layout="fill"
            objectFit="cover"
            />
            <div>
                <p>Not to sure, where to go</p>
            </div>
        </div>
    );
}
 
export default Banner;