import React from 'react';
import Head from 'next/head';
const Home = () => {
  return (
    <main>
      <Head>
        <title>Patient Records</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
        </style>
      </Head>
      <section className="h-screen bg-cover bg-[url('/img/doctorr.jpeg')] lg:bg-[url('/img/doctor.jpeg')]">
      <h1>Patient Records</h1>
      <p>All of your medical records in one system, Safe and Secure!</p>
      <button className='bg-blue-400 rounded px-4 py-3'>Connect Wallet</button>
      <button className='bg-red-500 rounded px-4 py-3 ml-2'>Register</button>

      </section>
    </main>
  )
}

export default Home