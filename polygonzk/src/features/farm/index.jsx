import React, { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import FarmChild from "./components/FarmChild"
import Pool from "./components/Pool"

export default function Farm() {
  const [isFarm, setisFarm] = useState(true)

  return (
    <section className="pt-3 md:pt-10 h-screen flex flex-col justify-between">
      <div>
        {" "}
        <Header />
        <section className=" bg-[#000000] flex-col flex items-center z-30 relative md:mb-12 mb-8">
          <div className="container flex justify-center">
            <div className="flex md:gap-10 gap-4 md:mb-4 mb-2 items-center mx-auto">
              {isFarm ? (
                <img src="/images/farm/farm-btn.png" className="cursor-pointer" alt="trade" />
              ) : (
                <p
                  className="font-LucidaConsole cursor-pointer uppercase text-white text-[28px]"
                  onClick={() => setisFarm(true)}
                >
                  FARMS
                </p>
              )}
              {!isFarm ? (
                <img src="/images/farm/pool-btn.png" className="cursor-pointer" alt="trade" />
              ) : (
                <p
                  className="font-LucidaConsole cursor-pointer uppercase text-white text-[28px]"
                  onClick={() => setisFarm(false)}
                >
                  POOL
                </p>
              )}
            </div>
          </div>

          <div className="w-full md:mb-10 mb-5">
            <img src="/images/common/line.png" alt="line" />
          </div>

          {isFarm ? <FarmChild /> : <Pool />}
        </section>
      </div>
      <section className="bg-[#000000] flex-col flex items-center z-30 relative">
        <div className="w-full">
          <img src="/images/common/line.png" alt="line" />
        </div>
        <Footer />
      </section>
    </section>
  )
}
