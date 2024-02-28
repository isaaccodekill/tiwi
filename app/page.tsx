import Image from "next/image";
import { Button } from "antd";
import DollData from "./data/dolls.json";

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
        <section className="min-h-screen bg-white p-12 min-h-screen sm:px-24 sm:pt-10 ">
            <h1 className="text-6xl font-serif text-pink-100 font-bold text-center mt-10">
                Get your very own Tiwi
            </h1>
            <div className="grid-cols-2">
                { DollData.map((doll) => (
                    <div key={doll.id} className="flex flex-col items-center gap-2">
                        <img
                            src={doll.image}
                            alt={doll.name}
                        />
                        <h2 className="text-2xl font-sans text-pink-100 font-bold text-center">
                            {doll.name}
                        </h2>
                        <p className="text-lg font-sans text-pink-100 font-bold text-center">
                            {doll.description}
                        </p>
                        <Button type="default" shape="round" className="w-40 !bg-blue-100 text-white" size="large"> Buy </Button>
                    </div>
                )
                ) }
            </div>
        </section>
    </main>
  );
}
