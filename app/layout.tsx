'use client';

import "./globals.css";
import {CartProvider} from "@/app/store/useCart";
import {notification as antdNotification} from "antd";


import localFont from 'next/font/local'

const cocogoose = localFont({
    src: [
        {
            path: './assets/fonts/cocogoose/Cocogoose-Pro-Light-trial.ttf',
            weight: '300',
            style: 'light'
        },
        {
            path: './assets/fonts/cocogoose/Cocogoose-Pro-Regular-trial.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './assets/fonts/cocogoose/Cocogoose-Pro-Bold-trial.ttf',
            weight: '700',
            style: 'bold'
        }
    ],
    variable: '--font-cocogoose'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    antdNotification.config({
        placement: "topRight",
        duration: 0,
        top: 0
    });
  return (
    <html lang="en">
      <head>
<meta charSet="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Tiwi</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
                rel="stylesheet"/>
       </head>
      <body className={`${cocogoose.variable}`}>
          <CartProvider>
              {
                  children
              }
          </CartProvider>
      </body>
    </html>
  );
}
