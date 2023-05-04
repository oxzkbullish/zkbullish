import React from "react"

export default function Launchpad() {
  return (
    <div className="container md:mb-12 z-10">
      <div className="flex flex-col justify-center gap-6 items-center mx-[20px] md:mt-14">
        <h3 className="text-[38px] md:text-[50px] text-light-text text-center max-w-[600px]">
          THE PLACE TO INCUBATOR FOR POTENTIAL PROJECTS
        </h3>
        <div className="flex gap-4 md:gap-6 justify-center">
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
        </div>
        <p className="text-light-text pb-2 md:pt-4 md:pb-4">
          ZKBullish will take an effort to support the decentralized community and potential project
          responsibility on Polygon zkEVM
        </p>
        <div className="flex md:mb-12 mb-8">
          <img
            className="cursor-pointer md:w-auto hover-ani w-[55%]"
            src="/images/home/launchpad-btn.png"
            alt="launch"
          />
          <img
            className="cursor-pointer md:w-auto hover-ani w-[55%]"
            src="/images/home/learn-btn.png"
            alt="learn"
          />
        </div>
      </div>

      {/* Launchpad Info  */}
      <div className="container text-light-text flex items-center justify-center z-10 mx-auto">
        <div className="grid grid-cols-6 relative items-center md:gap-0 gap-2 text-center mx-auto">
          <img className="absolute hidden md:flex" src="/images/home/line.png" alt="line" />
          <img
            className="absolute flex md:hidden left-[50%] top-[10%]"
            src="/images/home/mb-line.png"
            alt="line"
          />
          <img
            className="absolute flex md:hidden top-[40%] left-[16%]"
            src="/images/home/row-line.png"
            alt="line"
          />
          <img
            className="absolute flex md:hidden top-[68%] left-[16%]"
            src="/images/home/row-line.png"
            alt="line"
          />
          {/* <img className="absolute left-[50%]" src="/images/home/ver-line.png" alt="line" /> */}
          <img
            className="absolute hidden md:flex left-[35%]"
            src="/images/home/ver-line.png"
            alt="line"
          />
          <img
            className="absolute hidden md:flex right-[35%]"
            src="/images/home/ver-line.png"
            alt="line"
          />
          <div className="col-span-3 md:col-span-2 flex flex-col items-center justify-center  px-10 py-10">
            <p className="text-grey-text text-[18px] md:text-[20px] uppercase font-LucidaConsole">
              Circulating Supply
            </p>
            <p className="text-white mt-3">3,350,617</p>
          </div>
          {/* box 1 */}
          <div className="col-span-3 md:col-span-2 flex flex-col items-center justify-center ">
            <p className="text-grey-text text-[18px] md:text-[20px] uppercase font-LucidaConsole">
              Total supply
            </p>
            <p className="text-white mt-3">4,858,162</p>
          </div>
          {/* box 2 */}
          <div className="col-span-3 md:col-span-2 flex flex-col items-center justify-center ">
            <p className="text-grey-text text-[18px] md:text-[20px] uppercase font-LucidaConsole">
              Max Supply
            </p>
            <p className="text-white mt-3">500,000,000</p>
          </div>
          {/* box 3 */}
          <div className="col-span-3 md:col-span-2 flex flex-col items-center justify-center">
            <p className="text-grey-text text-[18px] md:text-[20px] uppercase font-LucidaConsole">
              Market cap
            </p>
            <p className="text-white mt-3">$2.2 million</p>
          </div>
          {/* box 4 */}
          <div className="col-span-3 md:col-span-2 flex flex-col items-center justify-center py-10">
            <p className="text-grey-text text-[18px] md:text-[20px] uppercase font-LucidaConsole">
              Burned to date
            </p>
            <p className="text-white font-AldrichRegular mt-3">0</p>
          </div>
          {/* box 5 */}
          <div className="col-span-3 md:col-span-2 flex flex-col items-center justify-center">
            <p className="text-grey-text text-[18px] md:text-[20px] uppercase font-LucidaConsole">
              Current emissions
            </p>
            <p className="text-white font-AldrichRegular mt-3">0.4/block</p>
          </div>
        </div>
      </div>
    </div>
  )
}
