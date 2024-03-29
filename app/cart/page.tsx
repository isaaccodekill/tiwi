'use client';

import {Button} from "antd";
import Image from "next/image";
import {useCart} from "@/app/store/useCart";
import DollData from "@/app/data/dolls.json";
import {formatCurrency} from "@/app/utils/utils";
import Link from "next/link";

export default function Page() {

    const { cart, removeItem,  } = useCart()

    const cartEmpty = Object.keys(cart).length === 0;

    const cartItems = Object.keys(cart).map((id) => {
        return {
            doll: DollData.find((doll) => doll.id.toString() === id),
            amount: cart[id]
        }
    })

    return (

        <section className="p-12 min-h-screen sm:px-10 sm:pt-10  flex flex-col pb-0">
            <div className="flex items-center justify-between">
                <Link href="/#shop">
                    <Button type="default" size="large" className="bg-yellow-200 text-black !rounded-none !border-0">
                        shop
                    </Button>
                </Link>
                <Link href="/">
                    <Image
                        className="relative"
                        src="/tiwi_logo.png"
                        alt="tiwi logo"
                        width={100}
                        height={37}
                        priority
                    />
                </Link>
                <div/>
            </div>

            { cartEmpty ? (

                <div className="flex flex-col items-center justify-center h-full w-full flex-grow">
                    <h1 className="text-4xl font-serif text-black font-bold text-center">Your cart is empty</h1>
                    <Image
                        className="relative "
                        src="/cart.png"
                        alt="cart"
                        width={100}
                        height={37}
                        priority
                    />
                </div>

            ) : (<div>

                <h3 className="text-2xl mt-10 font-serif text-black font-bold text-center">Your Cart</h3>

                {
                    cartItems.map((item) => (
                        <div key={item.doll?.id} className="flex items-center justify-between gap-8">
                            <div className="flex items-center gap-8">
                                <img
                                    src={item.doll?.image}
                                    alt={item.doll?.name}
                                    width={100}
                                    height={100}
                                />
                                <div>
                                    <h1 className="text-2xl font-serif text-black font-bold">{item.doll?.name}</h1>
                                    <p className="text-lg font-sans text-black font-light">{item.doll?.price && formatCurrency(item.doll?.price * item.amount )}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-8">
                                <Button type="default" size="large" onClick={() => removeItem(item.doll?.id)}>Remove</Button>
                                <h1 className="text-2xl font-sans text-black font-bold">{item.amount}</h1>
                            </div>
                        </div>
                    ))
                }

                <Button type="default" size="large" className="bg-yellow-200 mb-[20px] mt-[60px] text-center text-black !rounded-none !border-0">
                    Checkout
                </Button>

            </div>) }

        </section>
    )
}