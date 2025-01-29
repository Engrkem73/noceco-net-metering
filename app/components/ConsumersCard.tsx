import React from 'react'
import { Consumer } from './types'

const ConsumersCard: React.FC<Consumer> = (props) => {
    const {name, account, address, capacity, installer} = props
  return (
    <div className='relative h-64 w-[350px] bg-gray-300 rounded-xl shadow-lg flex flex-col items-center justify-start p-4 gap-5 transition ease-in-out delay-150 hover:scale-110 duration-300'>
        <div className='w-full'>
            <h3 className='text-2xl font-bold text-center'>{name}</h3>
        </div>
        <div className='overflow-hidden grid grid-flow-row grid-cols-2 items-start justify-center w-full gap-1'>
            <p className='font-bold'>Account Number:</p><p>{account}</p>
            <p className='font-bold'>Address:</p><p>{address?.barangay}, {address?.city}</p>
            <p className='font-bold'>Capacity:</p><p>{capacity} kWp</p>
            <p className='font-bold'>Installer:</p><p>{installer}</p>
        </div>
    </div>
  )
}

export default ConsumersCard