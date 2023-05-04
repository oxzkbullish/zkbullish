import React from "react"

export default function Start() {
  return (
    <div className="container mb-12 z-10">
      <div className="flex flex-col justify-center gap-6 items-center mx-[20px] md:mt-14">
        <div className="relative">
          <img src="/images/home/buff.png" alt="buff" />
          <div className="absolute bottom-[15%] left-[-20%]">
            <img src="/images/icons/stat-ic.png" className="" alt="stat" />
          </div>
          <div className="absolute md:top-[35%] md:right-[-20%] top-[10%] right-[2%]">
            <img src="/images/icons/stat-ic.png" className="" alt="stat" />
          </div>
        </div>
        <h3 className="text-[38px] md:text-[50px] text-light-text text-center max-w-[600px]">
          HIGH PERFORMANCE FROM NATURAL CORE
        </h3>
        {/* <div className="flex gap-4 md:gap-6 justify-center">
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
        </div> */}
        <p className="text-light-text font-InterMedium max-w-[500px] text-center pb-2 md:pt-4 md:pb-4">
          Use of Polygon Zero technology, the fastest ZK proof in the world, and fast network
          finality with frequent validity proofs.
        </p>

        <div className="flex md:mb-12 justify-center mb-8 z-10">
          <img
            className="cursor-pointer md:w-auto hover-ani w-[55%]"
            src="/images/home/cn-btn.png"
            alt="learn"
          />
        </div>
      </div>
    </div>
  )
}
