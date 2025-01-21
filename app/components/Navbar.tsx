import React from 'react'
import SignOut from './SignOut'
import isSession from './session'


const Navbar = async() => {
    const session = await isSession()
    
  return (
    <div className='bg-gray-200 flex items-center justify-between pr-8 pl-8 h-7 text-black'>
        <div>
            <ul className='flex flex-row gap-5'>
                <li className='border-r-gray-400 border-2 pr-5'>
                    Installer
                </li>
                <li className='border-r-gray-400 border-2 pr-5'>
                    Consumer
                </li>
                <li>
                    For DIS
                </li>
            </ul>
        </div>
        {session ? <SignOut/> : ''}
    </div>
  )
}

export default Navbar