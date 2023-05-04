import React from "react"

export default function Footer() {
  return (
    <div className="container mt-5 md:my-20 flex flex-col md:flex-row gap-4 justify-around items-center md:pb-4 pb-6">
      <div>
        <img src="/images/footer/logo.png" alt="logo" />
      </div>
      <div className="flex gap-6 md:gap-28 text-light-text items-center font-LucidaConsole">
        <ul className="grid gap-3 grid-cols-6">
          <li className="md:col-span-2 col-span-3 cursor-pointer">Home</li>
          <li className="md:col-span-2 col-span-3 cursor-pointer">Explorer</li>
          <li className="md:col-span-2 col-span-3 cursor-pointer">Info</li>
          <li className="md:col-span-2 col-span-3 cursor-pointer">Docs</li>
          <li className="md:col-span-2 col-span-3 cursor-pointer">Whitepaper</li>
          <li className="md:col-span-2 col-span-3 cursor-pointer">Partnership</li>
        </ul>
        <article className="grid gap-y-4 gap-x-4 md:gap-x-8 md:gap-y-4 grid-cols-6 items-center">
          <img
            className="md:col-span-2 col-span-3 cursor-pointer"
            src="/images/footer/yt.png"
            alt="social"
          />
          <img
            className="md:col-span-2 col-span-3 cursor-pointer"
            src="/images/footer/yt.png"
            alt="social"
          />
          <img
            className="md:col-span-2 col-span-3 cursor-pointer"
            src="/images/footer/yt.png"
            alt="social"
          />
          <img
            className="md:col-span-2 col-span-3 cursor-pointer"
            src="/images/footer/yt.png"
            alt="social"
          />
          <img
            className="md:col-span-2 col-span-3 cursor-pointer"
            src="/images/footer/yt.png"
            alt="social"
          />
          <img
            className="md:col-span-2 col-span-3 cursor-pointer"
            src="/images/footer/yt.png"
            alt="social"
          />
        </article>
      </div>
    </div>
  )
}
