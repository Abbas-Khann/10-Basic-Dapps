import React from 'react'

const table = (props) => {
    const {name} = props

  return (
    <table className='w-8/12'>
      <tbody className='flex items-center justify-evenly bg-white rounded m-4'>
        <td className=' text-2xl p-2'>1</td>
        <td className='mr-16 text-2xl'>{name}</td>
        <img src="https://img.icons8.com/color/48/000000/donald-trump.png"/>
        <td className=' text-2xl'>1</td>
      </tbody>
     </table>
  )
}

export default table