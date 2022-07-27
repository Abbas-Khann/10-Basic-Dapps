import React from 'react'

const Reports = ({fileName}) => {
  return (
    <div>
        <table class='shadow-2xl border-2 border-cyan-200'>
        <thead class='text-white'>
            <tr>
                <th class='py-3 bg-cyan-800'>Patient Files</th>
                
            </tr>
            <tbody class='text-cyan-900 text-center flex'>
                <tr class='bg-cyan-200 cursor-pointer duration-300 flex flex-col'>
                    <td class='py-3 px-6'>Report 1</td>
                    <td class='py-3 px-6'>Report 2</td>
                    
                </tr>
                <tr class='bg-white flex flex-col '>
                    <td class="py-3 px-6 border-b-2 border-blue-200">ipfs.aldfnlaknbfkuawbefkawnbkjefbauwf</td>
                    <td class="py-3 px-6">ipfs.aldfnlaknbfkuawbefkawnbkjefbauwf</td>
                    
                </tr>
            </tbody>
        </thead>

    </table>
    </div>
  )
}

export default Reports