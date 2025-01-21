import React from 'react'
import SignIn from '../components/SignIn'
import isSession from '../components/session'
import {redirect} from 'next/navigation'

const page = async () => {
    const session = await isSession()
    if(session){
        return redirect('/')
    }
  return (
    <main className='flex items-center justify-center'>
        <div className='bg-gray-300 h-96 w-80 rounded-md shadow-lg flex flex-col justify-center items-center gap-10'>
            <h3 className='text-2xl'>Please Sign in to continue</h3>
            <SignIn/>
        </div>
    </main>
  )
}

export default page