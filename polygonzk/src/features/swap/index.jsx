import React from "react"
import { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Liquidity from "./components/Liquidity"
import SwapChild from "./components/Swap"

export default function Swap() {
  const [isSwap, setIsSwap] = useState(true)

  return (
    <section className="pt-3 md:pt-10">
      <Header />
      <section className=" bg-[#000000] flex-col flex items-center z-30 relative md:mb-12 mb-8">
        <div className="container flex justify-center">
          <div className="flex md:gap-10 gap-4 md:mb-4 mb-2 items-center">
            {isSwap ? (
              <img src="/images/swap/sw-btn.png" className="cursor-pointer" alt="trade" />
            ) : (
              <p
                className="font-LucidaConsole cursor-pointer uppercase text-white text-[28px]"
                onClick={() => setIsSwap(true)}
              >
                Swap
              </p>
            )}
            {!isSwap ? (
              <img src="/images/swap/li-btn.png" className="cursor-pointer" alt="trade" />
            ) : (
              <p
                className="font-LucidaConsole cursor-pointer uppercase text-white text-[28px]"
                onClick={() => setIsSwap(false)}
              >
                Liquidity
              </p>
            )}
          </div>
        </div>

        <div className="w-full md:mb-10 mb-5">
          <img src="/images/common/line.png" alt="line" />
        </div>
        {isSwap ? <SwapChild /> : <Liquidity />}
      </section>
      <section className="bg-[#000000] flex-col flex items-center z-30 relative">
        <div className="w-full">
          <img src="/images/common/line.png" alt="line" />
        </div>
        <Footer />
      </section>
    </section>
  )
}
