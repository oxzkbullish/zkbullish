import React from "react"
import { FARM_LIST } from "../../../apis/data"

export default function Farm() {
  return (
    <div className="container mb-12">
      <div className="flex flex-col justify-center gap-6 items-center mx-[20px] md:mt-14">
        <h3 className="text-[38px] md:text-[50px] text-light-text text-center max-w-[600px]">
          PASSIVE INCOME EASILY COMES WITH EVERYONE WITH ZKBULLISH
        </h3>
        <div className="flex gap-4 md:gap-6 justify-center">
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
        </div>
        <p className="text-light-text pb-2 md:pt-4 md:pb-4">
          Full support for pool, farm, stake, and many other methods will come later. Do not worry
          about how to make your money grow fast and secure.
        </p>

        <div className="flex md:mb-12 mb-8">
          <img
            className="cursor-pointer md:w-auto hover-ani w-[55%]"
            src="/images/home/traden-btn.png"
            alt="trade"
          />
          <img
            className="cursor-pointer md:w-auto hover-ani w-[55%]"
            src="/images/home/learn-btn.png"
            alt="learn"
          />
        </div>
      </div>

      {/* FARM LIST  */}
      <div className="container text-light-text flex flex-col items-center justify-center md:bg-s4-bg md:pb-[100px] bg-cover">
        <div className="flex justify-center items-center text-center relative my-6 md:my-0 border md:border-none py-4 md:py-0 w-[80%] md:w-auto">
          <img className="md:flex hidden" src="/images/home/title-border.png" alt="title" />
          <div className="flex gap-4 md:absolute translate-x-[0%] items-center">
            <h3 className="font-InterMedium md:text-[28px]">TOP FARM</h3>
            <div>
              <img src="/images/icons/updown-ic.png" alt="updown" />
            </div>
          </div>
        </div>

        <article className="grid grid-cols-10 md:mt-10 w-full">
          {FARM_LIST.map((item, index) => {
            return (
              <div
                key={index}
                className="col-span-5 md:col-span-2 flex flex-col items-center leading-8"
              >
                <p className="text-[#8525FF] text-[18px] md:text-[22px] font-LucidaConsole">
                  {item.name}
                </p>
                <p className="text-[#ffffff] text-[14px] md:text-[18px] font-AldrichRegular">
                  {item.percent}
                </p>
                <p className="text-grey-text text-[10px] md:text-[16px] font-LucidaConsole">
                  {item.symbol}
                </p>
              </div>
            )
          })}
        </article>
      </div>
    </div>
  )
}
