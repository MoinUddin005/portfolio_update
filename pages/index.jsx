import { useTheme } from "next-themes";
import Blob from "@/components/Blob";
import Image from "next/image";
import moin from "../public/moin.jpg";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;


  return (
    <>
      <Head>
        <title>Moin ✦ developer, designer</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20 ">
            {currentTheme === "dark" ? (
              <Image className="rounded-full h-40 w-40"
              src={moin}
                alt="moin"
                
              />
              
            ) : (
              <Image className="rounded-full h-40 w-40"
              src={moin}
                alt="moin"
                
              />
            )}
            <div className="flex flex-col ml-4 lg:ml-28">
              <h2 className="font-bold sm:text-2xl md:text-2xl lg:text-4xl">
               MOIN UDDIN
              </h2>
              <h4 className="text-gray-400 xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl">
                (～￣▽￣)～
              </h4>
            </div>
          </div>
          <div className="mt-12 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              I am full stack Developer based in
              who develops modern, reactive, and user-friendly web applications
              using the latest technologies currently. I believe a perfect blend
              of UI architecture is one, where the goals and needs are accounted
              for in an elegant, efficient, and robust design of the UI.
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
