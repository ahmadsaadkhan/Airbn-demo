import Image from "next/image";

const Header = () => {
    return ( 
        <header>
            <div className="relative flex items-center">
                <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>
            <div></div>
            <div></div>
        </header>
     );
}
 
export default Header;