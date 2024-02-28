'use client';
import {useEffect, useState} from "react";
import Dolldata from '../../data/dolls.json';
import {Button, notification } from "antd";
import Image from "next/image";
import PlusIcon from "../../assets/images/plus.svg";
import MinusIcon from "../../assets/images/minus.svg";
import {formatCurrency} from "@/app/utils/utils";
import {useCart} from "@/app/store/useCart";
import {router} from "next/client";
import Link from "next/link";


type NotificationType = 'success' | 'info' | 'warning' | 'error';

export default function Page({ params }: { params: { id: string } }) {

    const doll = Dolldata.find((doll) => doll.id.toString() === params.id);

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Added to cart',
            description:
                `You have successfully added ${doll?.name} to cart`,
        });
    };


    const { cart, addItem, removeItem, updateItem } = useCart();

    const [dollCount, setDollCount] = useState(cart[params.id] ?? 0);
    const incrementDollCount = () => {
        setDollCount(dollCount + 1);
    }

    const decrementDollCount = () => {
        if(dollCount > 0){
            setDollCount(dollCount - 1);
        }
    }


    const addToCart = () => {
        console.log(dollCount, cart)
        if(dollCount > 0){
            addItem(params.id, dollCount);
        }
    }

    useEffect(() => {
        openNotificationWithIcon('success')
    }, [cart, dollCount])






    return (
        <section className="p-12 min-h-screen sm:px-10 sm:pt-10  flex flex-col pb-0 relative">
            <div className="flex items-center justify-between sticky top-12">
                <Link href="/#shop">
                <Button type="default" size="large" className="bg-yellow-200 text-black !rounded-none !border-0">
                    shop
                </Button>
                </Link>

                <Image
                    className="relative"
                    src="/tiwi_logo.png"
                    alt="tiwi logo"
                    width={100}
                    height={37}
                    priority
                />

                <div className="flex items-center gap-8">
                    <Link href="/cart" className="text-blue-100 font-sans hover:border-b-2 border-solid">
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-grow pt-12">
                <div className="flex flex-col sticky top-[150px] justify-start gap-5 h-full overflow-y-auto">
                    {doll && doll.sub_images.map((image, index) => (
                        <a href={`#${image}`} className="border border-transparent hover:border-black hover:border-solid hover:border duration-300">
                            <img
                                key={index}
                                src={image}
                                alt={doll.name}
                                className="w-[100px] h-[100px] object-top  object-cover"
                            />
                        </a>
                    ))}
                </div>
            <div className="flex flex-grow pt-10 ">

                    <div className="flex flex-col gap-10">
                        {doll && (doll.sub_images.map(img => (
                            <img
                                id={img}
                                src={img}
                                alt={doll?.name}
                                className={`w-[350px] sm:ml-20 object-cover scroll-m-10`}
                            />
                        ))) }
                    </div>
                </div>
                <div className="flex shrink flex-col sticky h-full top-[150px] justify-start sm:w-[500px]">
                    <span className="">Tiwi doll</span>
                    <h1 className="font-serif text-4xl mb-10"> {doll?.name} </h1>
                    <p className="text-2xl mb-10 font-sans !font-light"> { doll && formatCurrency(doll.price) } </p>

                    <span className="font-serif"> Quantity </span>
                    <div className="flex px-5 mt-5 border border-black border-b-2 items-center gap-4 h-10 w-[200px] p-1 justify-between">
                        <button onClick={decrementDollCount}>
                            <Image
                                src={MinusIcon}
                                alt="My SVG"
                                width={15}
                                height={15}
                            />
                        </button>
                        <span> { dollCount  } </span>
                        <button onClick={incrementDollCount}>
                            <Image
                                src={PlusIcon}
                                alt="My SVG"
                                width={15}
                                height={15}
                            />
                        </button>

                    </div>

                    <Button type="default" onClick={addToCart} size="large" className="bg-yellow-200 mb-[20px] mt-[60px] text-center text-black !rounded-none !border-0">
                        ADD TO CART
                    </Button>
                    <p className="font-sans mb-10"> {doll?.description} </p>
                    <p className="font-sans"> {doll?. description2} </p>
                </div>
            </div>
        </section>
    );
}