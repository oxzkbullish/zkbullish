import React, { useState } from "react"

export default function FarmChild() {
  const [toggleStake, settoggleStake] = useState(false)
  const [isLive, setisLive] = useState(true)
  return (
    <div className="container flex flex-col text-white font-LucidaConsole">
      <div className="flex flex-col md:flex-row items-center gap-3 md:justify-around font-LucidaConsole">
        <div className="flex gap-4 md:gap-10">
          {/* STAKED ONLY  */}
          <div className="flex gap-3 items-center">
            <div
              className="flex border rounded cursor-pointer"
              onClick={() => settoggleStake(!toggleStake)}
            >
              <div
                className={`w-[20px] m-[4px] h-[20px] rounded ${
                  !toggleStake ? "bg-[#aba3b6]" : "bg-transparent"
                }`}
              ></div>
              <div
                className={`w-[20px] m-[4px] h-[20px] rounded ${
                  toggleStake ? "bg-[#7a16fd]" : "bg-transparent"
                }`}
              ></div>
            </div>
            <p>STAKED ONLY</p>
          </div>
          {/* LIVE OR FINISH  */}

          <div className="flex items-center">
            <div
              className="flex border rounded cursor-pointer font-LucidaConsole items-center"
              onClick={() => setisLive(!isLive)}
            >
              <div className={` px-2 ${isLive ? "bg-[#7b1bf8]" : "bg-transparent"}`}>LIVE</div>
              <div className={`px-2 ${!isLive ? "bg-[#7b1bf8]" : "bg-transparent"}`}>FINISH</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col">
            <p className="text-[14px]">SORT BY</p>
            <div className="border rounded pr-2">
              <select className="bg-transparent py-2 px-3  cursor-pointer focus:outline-none">
                <option className="bg-[#000000] pr-2 mt-2" value="0">
                  HOT
                </option>
                <option className="bg-[#000000] pr-2 mt-2" value="1">
                  Audi
                </option>
                <option className="bg-[#000000] pr-2 mt-2" value="2">
                  BMW
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[14px]">SEARCH</p>
            <div className="border rounded flex gap-3 items-center">
              <input
                type="text"
                className="bg-transparent py-[4px] pl-2 focus:ring-0 focus:ring-offset-0 focus:outline-none"
                placeholder="search params..."
              />
              <div>
                {" "}
                <img className="cursor-pointer mr-3" src="/images/icons/search.png" alt="search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
