import React from 'react'
import ConsumerCardList from '../components/ConsumerCardList'
import { Plus } from 'lucide-react'
import {consumers} from '../collections/consumers'

const page = () => {
  const filteredConsumers = consumers.filter(consumers => consumers.capacity >= 10)
  return (
    <main className='flex flex-col justify-center items-center'>
        <ConsumerCardList filteredConsumers={filteredConsumers}/>
      <div className='h-10 w-10 bg-slate-300 rounded-full border-2 transition ease-in-out delay-150 hover:scale-110 duration-300 border-black shadow-2xl shadow-black flex items-center justify-center fixed bottom-4 right-3'>
          <Plus/>
      </div>
    </main>
  )
}

export default page