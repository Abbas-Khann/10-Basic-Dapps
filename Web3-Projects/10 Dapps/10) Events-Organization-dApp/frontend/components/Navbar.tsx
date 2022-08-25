import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-around py-6 bg-[#21273D]'>
        <Head>
             <style>
               @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');
             </style>
        </Head>
        <h1 className='text-lg md:text-3xl text-white'>Organize Events</h1>
            <Link href="/Events">
                <button className='text-white text-lg md:text-3xl bg-[#2E383F] px-3 py-1 rounded-lg'>
                    Events
                </button>
            </Link>
        <ConnectButton />

    </nav>
  )
}

export default Navbar