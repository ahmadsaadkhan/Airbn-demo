import Image from "next/image"

const MediumCard = ({ image, title }) => {
    return (
        <div>
            <div className="relative h-40 w-40">
                <Image src={image} layout="fill" />
            </div>
        </div>
    );
}

export default MediumCard;