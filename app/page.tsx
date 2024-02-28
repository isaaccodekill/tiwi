import Image from "next/image";
import { Button } from "antd";
import DollData from "./data/dolls.json";
import {formatCurrency} from "@/app/utils/utils";

export default function Home() {
  return (
    <main className="min-h-screen">
        <section className="p-12 min-h-screen sm:px-24 sm:pt-10  flex flex-col pb-0 bg-yellow-100">
            <div className="relative flex justify-between w-full">
                <Image
                    className="relative"
                    src="/tiwi_logo.png"
                    alt="tiwi logo"
                    width={100}
                    height={37}
                    priority
                />
                <div className="flex items-center gap-8">
                    <a href="/#shop">
                        <Button type="default" shape="round" className="w-40 !bg-blue-100 text-white" size="large"> Shop </Button>
                    </a>
                    <a href="/cart" className="text-blue-100 hover:border-b-2 border-solid">
                        <span>Cart</span>
                    </a>
                </div>
            </div>
            <div className="flex flex-grow flex-col items-center justify-between items-center gap-2 mt-20 sm:mt-5">
                <div className="flex flex-col items-center">
                    <Image
                        src="/tiwi_main.png"
                        alt="tiwi_main"
                        width={200}
                        height={100}
                    />
                    <h1 className="text-6xl font-serif text-pink-100 font-bold text-center mt-10">
                        Meet Your Mini-Me
                    </h1>
                    <h2 className="text-2xl font-sans text-pink-100 font-bold text-center">
                        Your Teenie Weenie Little Twin
                    </h2>
                </div>
                    <Image
                        src="/tiwi_doll.png"
                        alt="tiwi_doll"
                        width={600}
                        height={400}
                    />
            </div>
        </section>
        <section id="shop"  className="min-h-screen bg-white p-12 min-h-screen sm:px-24 sm:pt-12 ">
            <div className="flex justify-center">
                <Image
                    src="/hi.png"
                    alt="tiwi_hi"
                    width={200}
                    height={100}
                />
            </div>
            <h3 className="text-2xl mt-10 font-serif text-black font-bold text-center">Get your own Tiwi today!</h3>
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
                { DollData.map((doll) => (
                    <a key={doll.id} href={`/shop/${doll.id}`}>
                        <div key={doll.id} className="flex flex-col items-center gap-2">
                            <img
                                className="w-60 object-top"
                                src={doll.image}
                                alt={doll.name}
                            />
                            <p className="text-2xl font-serif text-black font-bold ">{doll.name}</p>
                            <span> {formatCurrency(doll.price)} </span>
                        </div>
                    </a>
                )
                ) }
            </div>
        </section>
    </main>
  );
}
