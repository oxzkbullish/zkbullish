import React, { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Farm from "./components/Farm"
import Info from "./components/Info"
import Launchpad from "./components/Launchpad"
import Start from "./components/Start"
import Trade from "./components/Trade"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="z-10 bg-head-bg bg-no-repeat bg-cover bg-inherit md:bg-center flex flex-col items-center pt-3 md:pt-10 pb-8 md:pb-28 relative font-LucidaConsole">
        <Header />
        <section className="z-2 grid grid-cols-12 text-light-text gap-3 container mt-8 md:mt-24 relative">
          <div className="md:col-span-6 col-span-12 flex justify-center items-center">
            <div>
              <h2 className="xl:text-[54px] md:xl:text-[38px] text-[28px] text-light-text ml-4">
                BRING THE LIGHT OF DEFI TO THE FUTURE OF POLYGON ZKEVM
              </h2>
              <p className="max-w-[500px] ml-4">
                Trade, earn, and have a great experience with the best security-performance Defi
                Platform on Polygon zkEVM
              </p>
              <div className="flex mt-4 md:mt-14">
                <img
                  className="cursor-pointer md:w-auto hover-ani w-[55%]"
                  src="/images/home/cn-btn.png"
                  alt="connect"
                />
                <img
                  className="cursor-pointer md:w-auto hover-ani w-[55%]"
                  src="/images/home/trade-btn.png"
                  alt="trade"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="/images/home/buff.png" alt="buff" />
          </div>
        </section>
        <img src="/images/home/line-bg.png" className="absolute bottom-0 z-[-1]" alt="line" />
      </section>
      <section className="bg-head2-bg bg-no-repeat bg-cover flex flex-col items-center relative z-10">
        <Info />
        <img src="/images/home/line-bg.png" className="absolute bottom-0 z-[-1]" alt="line" />
      </section>
      <section className="flex px-4 md:px-20 justify-center bg-[#000000]">
        <Trade />
      </section>
      <section className="bg-[#000000] flex justify-center">
        <Farm />
      </section>
      <section className="bg-galaxy-bg bg-cover relative flex flex-col items-center justify-center z-10">
        <img className="absolute md:top-0 top-[0%] z-0" src="/images/home/s5-blur.png" alt="line" />
        <img
          className="absolute flex md:hidden top-[50%] z-0"
          src="/images/home/s5-mb.png"
          alt="line"
        />
        <Launchpad />
        <div className="md:flex hidden z-10">
          <img className="z-10" src="/images/home/s5-galaxy.png" alt="" />
        </div>
        <div className="absolute z-1 top-[-10%] md:top-[20%] right-[5%] md:left-[10%]">
          <img src="/images/icons/coin4.png" alt="" />
        </div>
      </section>
      <section className="bg-[#000000] flex justify-center z-30">
        <Start />
      </section>
      <section className="bg-[#000000] flex-col flex items-center z-30 relative">
        <div className="w-full">
          <img src="/images/common/line.png" alt="line" />
        </div>
        <Footer />
      </section>
    </div>
  )
}
