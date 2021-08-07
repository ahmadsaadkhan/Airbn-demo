import Image from 'next/image'

const SmallCard = ({image, location, distance}) => {
    return (
        <div className="">
            <div className="relative">
                <Image src={image} layout="fill" />
            </div>
            <div></div>
        </div>
    );
}
 
export default SmallCard;