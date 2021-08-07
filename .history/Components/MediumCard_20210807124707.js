import Image from "next/image"

const MediumCard = ({ image, title }) => {
    return (
        <div>
            <div className="relative h-80 w-80">
                <Image src={image} layout="fill" />
            </div>
        </div>
    );
}

export default MediumCard;