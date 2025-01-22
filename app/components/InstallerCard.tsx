import React from 'react'
import {Installer} from './types'


const InstallerCard: React.FC<Installer> = (props) => {
    const {name, phone, mobile, email} = props
  return (
    <div className='h-24 w-[500px] bg-gray-300 rounded-xl shadow-lg flex items-center justify-between p-4 transition ease-in-out delay-150 hover:scale-110 duration-300'>
        <div className='w-1/2'>
            <h3>{name}</h3>
        </div>
        <div className='overflow-hidden flex flex-col items-start justify-center w-1/2'>
            <p>Phone: {phone}</p>
            <p>Mobile: {mobile}</p>
            <p>Email: {email}</p>
        </div>
    </div>
  )
}

export default InstallerCard