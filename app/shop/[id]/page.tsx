import Dolldata from '../../data/dolls.json';
import {Button} from "antd";
import Image from "next/image";
import PlusIcon from "../../assets/images/plus.svg";
import MinusIcon from "../../assets/images/minus.svg";

export default function Page({ params }: { params: { id: string } }) {

const doll = Dolldata.find((doll) => doll.id.toString() === params.id);

    return (
        <section className="p-12 min-h-screen sm:px-10 sm:pt-10  flex flex-col pb-0">
            <div className="flex items-center justify-between">
                <a href="/#shop">
                <Button type="default" size="large" className="bg-yellow-200 text-black !rounded-none !border-0">
                    shop
                </Button>
                </a>

                <Image
                    className="relative"
                    src="/tiwi_logo.png"
                    alt="tiwi logo"
                    width={100}
                    height={37}
                    priority
                />

                <div className="flex items-center gap-8">
                    <a href="/cart" className="text-blue-100 hover:border-b-2 border-solid">
                        <span>Cart</span>
                    </a>
                </div>
            </div>
            <div className="flex flex-grow pt-10">
                <div className="flex flex-grow">
                    <div className="flex flex-col justify-between h-full overflow-y-auto">
                        {doll && doll.sub_images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={doll.name}
                                className="w-20 object-cover"
                            />
                        ))}
                    </div>
                    <img
                        src={doll?.image}
                        alt={doll?.name}
                        className={`h-[620px] sm:ml-20 object-top object-cover`}
                    />
                </div>
                <div className="flex shrink flex-col justify-center sm:w-[500px]">
                    <span className="">Tiwi doll</span>
                    <h1 className="font-serif text-4xl"> {doll?.name} </h1>
                    <p className="text-2xl"> {doll?.price} </p>

                    <div className="flex border border-b-2 items-center gap-4 h-10 w-100 p-10 justify-between">
                        <Image
                            src={MinusIcon}
                            alt="My SVG"
                            width={20}
                            height={20}
                        />
                        <span>Quantity</span>
                        <Image
                            src={PlusIcon}
                            alt="My SVG"
                            width={20}
                            height={20}
                        />

                    </div>

                    <Button type="default" size="large" className="bg-yellow-200 text-center text-black !rounded-none !border-0">
                        ADD TO CART
                    </Button>
                    <p className="text-2xl"> {doll?.description} </p>
                    <p> {doll?. description2} </p>
                </div>
            </div>
        </section>
    );
}