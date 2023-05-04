import React from "react"

export default function Liquidity() {
  return (
    <div className="container max-w-[500px] text-light-text flex flex-col items-center justify-center md:bg-swap-blur md:pb-[100px] bg-cover">
      <div className="flex justify-center items-center text-center relative my-6 md:my-0 border md:border-none py-4 md:py-0 w-[80%] md:w-auto">
        <img className="md:flex hidden" src="/images/home/border-bot.png" alt="title" />
        <div className="flex gap-4 md:absolute translate-x-[0%] items-center">
          <h3 className="font-InterMedium text-[24px] md:text-[28px] uppercase">Liquidity</h3>
        </div>
      </div>

      <article className="flex w-[90%] mx-auto flex-col items-center">
        <p className="text-white font-AldrichRegular md:text-[22px] mt-4 text-[18px] text-center md:pb-8 pb-4">
          Remove liquidity to receive tokens back
        </p>
        <p className=" font-AldrichRegular md:text-[22px] text-[18px] text-center text-[#8525FF]">
          Connect to a wallet to view your liquidity.
        </p>
        <div className="flex justify-center mt-2">
          <img src="/images/swap/add-li.png" className="cursor-pointer" alt="add" />
        </div>
      </article>
    </div>
  )
}
