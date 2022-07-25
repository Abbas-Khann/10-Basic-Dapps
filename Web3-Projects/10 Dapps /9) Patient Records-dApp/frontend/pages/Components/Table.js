import React from 'react'

const Table = () => {
  return (
    <table class='shadow-2xl border-2 border-cyan-200'>
        <thead class='text-white'>
            <tr>
                <th class='py-3 bg-cyan-800'>Patient Details</th>
                
            </tr>
            <tbody class='text-cyan-900 text-center flex'>
                <tr class='bg-cyan-200 cursor-pointer duration-300 flex flex-col'>
                    <td class='py-3 px-6'>Name</td>
                    <td class='py-3 px-6'>Age</td>
                    <td class='py-3 px-6'>Sex</td>
                    <td class='py-3 px-6'>Location</td>
                    <td class='py-3 px-6'>Address</td>
                </tr>
                <tr class='bg-cyan-200 flex flex-col '>
                    <td class="py-3 px-6">Abbas Khan</td>
                    <td class="py-3 px-6">22</td>
                    <td class="py-3 px-6">Male</td>
                    <td class="py-3 px-6">Kabul</td>
                    <td class="py-3 px-6">0x7B4A8d0862F049E35078E49F2561630Fac079eB9</td>
                </tr>
            </tbody>
        </thead>

    </table>
  )
}

export default Table