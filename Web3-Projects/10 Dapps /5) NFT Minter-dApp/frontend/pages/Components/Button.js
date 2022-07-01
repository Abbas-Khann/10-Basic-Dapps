import React from 'react'

 const Button = () => {
  return (
    <div
      className="mt-8 max-w-sm mx-auto rounded-xl bg-green-300 text-center font-semibold text-lg"
    //   onClick={onClick}
    >
      <span
        className="block px-16 py-4 rounded-xl bg-emerald-500 
      text-xl text-white -translate-y-2 active:-translate-y-1 cursor-pointer"
      >
        Mint 🚀
      </span>
    </div>
  )
}

export default Button