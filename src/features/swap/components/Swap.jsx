import React from "react"

export default function SwapChild() {
  return (
    <div className="container max-w-[500px] text-light-text flex flex-col items-center justify-center md:bg-swap-blur md:pb-[100px] bg-cover">
      <div className="flex justify-center items-center text-center relative my-6 md:my-0 border md:border-none py-4 md:py-0 w-[80%] md:w-auto">
        <img className="md:flex hidden" src="/images/home/border-bot.png" alt="title" />
        <div className="flex gap-4 md:absolute translate-x-[0%] items-center">
          <h3 className="font-InterMedium text-[24px] md:text-[28px]">SWAP</h3>
        </div>
      </div>

      <article className="flex w-[90%] mx-auto flex-col">
        <div className="flex flex-col md:mt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer mb-1">
              <p className="text-white font-LucidaConsole md:text-[24px] text-[20px]">ETH</p>
              <img src="/images/icons/down.png" alt="list" />
            </div>
            <div className="flex items-center justify-end md:gap-6 gap-5 mb-3">
              <img className="cursor-pointer" src="/images/swap/set-ic.png" alt="set" />
              <img className="cursor-pointer" src="/images/swap/reload-ic.png" alt="set" />
            </div>
          </div>
          <div>
            <input
              className="w-full font-AldrichRegular py-3 rounded-md bg-[#2f1f43] px-4"
              defaultValue={0}
              type="number"
              min={0}
            />
          </div>
          <div className="mx-auto md:my-4 my-2">
            <img src="/images/swap/swap-ic.png" className="cursor-pointer" alt="list" />
          </div>

          <div className="flex items-center gap-3 mb-1 cursor-pointer">
            <p className="text-white font-LucidaConsole md:text-[24px] text-[20px]">OxZkBullish</p>
            <img src="/images/icons/down.png" alt="list" />
          </div>
          <div>
            <input
              className="w-full font-AldrichRegular py-3 rounded-md bg-[#2f1f43] px-4"
              defaultValue={0}
              type="number"
              min={0}
            />
          </div>
          <div className="flex justify-between items-center md:mt-5 mt-4 text-[#8525FF]">
            <p className="font-LucidaConsole md:text-[24px] text-[20px]">Slippage Tolerance</p>
            <p className="font-AldrichRegular md:text-[24px] text-[20px]">0.5 %</p>
          </div>
          <div className="flex justify-center items-center md:mt-8 mt-3">
            <p className="text-white bg-[#8525FF] text-[22px] md:text-[28px] uppercase font-AldrichRegular cursor-pointer  py-2 px-4 border rounded-md">
              {" "}
              SWAP
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
