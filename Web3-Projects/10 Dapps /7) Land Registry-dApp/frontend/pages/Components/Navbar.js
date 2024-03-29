import Head from "next/head";
import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div>
      <Head>
        <title>Land Registry dApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon2.png" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
        </style>
      </Head>
      <h1 className="text-white text-center text-2xl font-bold p-4 sm:text-xl md:text-2xl">
        Land Registry
      </h1>
      <nav className=" bg-slate-700 p-2 flex justify-between text-white px-6 sm:text-xl md:text-xl">
        <Link href="/">
          <button className="transition ease-in delay-150 hover:bg-slate-900 rounded px-3 sm:text-2xl md:text-2xl">
            Search
          </button>
        </Link>
        <Link href="/Register">
          <button className="transition ease-in delay-150 hover:bg-slate-900  rounded px-3 sm:text-2xl md:text-2xl">
            Register
          </button>
        </Link>
        <Link href="/Transfer">
          <button className="transition ease-in delay-150 hover:bg-slate-900 rounded px-3 sm:text-2xl md:text-2xl">
            Transfer Ownership
          </button>
        </Link>
        <button>
          <ConnectButton accountStatus="avatar" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
