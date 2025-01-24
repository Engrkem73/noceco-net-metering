import React from 'react'
import { PageProps } from '@/app/components/types'
import { installers } from '@/app/components/installers'


const page = async ({params}: PageProps) => { 
    const resolvedParams = await params
    const id = await resolvedParams.id

    const installer = () => {
      for(let i = 0; i < installers.length; i++){
        if(installers[i].id === Number(id)){
          return installers[i]
        }
    }
    }
    

  return (
    <main className='flex justify-center items-start'>
        <h1>{installer()?.name}</h1>
    </main>
  )
}

export default page