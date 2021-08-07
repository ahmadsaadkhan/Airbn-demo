import Image from 'next/image'

const SmallCard = ({image, location, distance}) => {
    return (
        <div className="">
            <div className="relative h-16 w-16">
                <Image src={image} layout="fill" className="rounded-lg" />
            </div>
            <div>
                <h2>{item.location}</h2>
                <h3>{item.distance}</h3>
            </div>
        </div>
    );
}
 
export default SmallCard;