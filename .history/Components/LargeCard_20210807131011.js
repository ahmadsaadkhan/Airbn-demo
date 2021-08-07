import Image from "next/image"

const LargeCard = ({img, title, description, buttonText }) => {
    return ( <div>
        <div className="relative h-96 min-w-[300]">
            <Image src={img} layout="fill" className="rounded-full" />
        </div>
    </div> );
}
 
export default LargeCard;