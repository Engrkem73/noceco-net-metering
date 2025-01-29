import React from 'react'
import SignOut from './SignOut'
import isSession from './session'
import Link from 'next/link'


const Navbar = async() => {
    const session = await isSession()
    
  return (
    <div className='bg-gray-200 flex items-center justify-between pr-8 pl-8 h-7 text-black sticky top-14 z-40'>
        <div>
            <ul className='flex flex-row gap-5'>
                <Link href={'/'}>
                    <li className='border-r-gray-400 border-2 pr-5'>
                        Installer
                    </li>
                </Link>
                <Link href={'/consumers'}>
                    <li className='border-r-gray-400 border-2 pr-5'>
                        Consumer
                    </li>
                </Link>
                <Link href={'/dis'}>
                    <li className='border-r-gray-400 border-2 pr-5'>
                        For DIS
                    </li>
                </Link>
            </ul>
        </div>
        {session ? <SignOut/> : ''}
    </div>
  )
}

export default Navbar