import Image from "next/image"

const LargeCard = ({img, title, description, buttonText }) => {
    return ( 
    <div className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300]">
            <Image src={img} layout="fill" />
        </div>
    </div> );
}
 
export default LargeCard;