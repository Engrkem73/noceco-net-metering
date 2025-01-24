import isSession from './components/session'
import {redirect} from 'next/navigation'
import Link from 'next/link'
import InstallerCard from './components/InstallerCard'
import { installers } from './components/installers'

import { Plus } from 'lucide-react';



export default async function Home() {
  const session = await isSession()
  if(!session){
    return redirect('/signIn')
  }
  return (
    <main className='flex flex-col justify-center items-center'>
          <ul className='flex flex-col justify-center items-center gap-7'>
            {
              installers.map((installer, index) => (
                  <li key={index}>
                    <Link href={`installer/${installer.id}`}>
                    <InstallerCard 
                                  id={installer.id}
                                  name={installer.name}
                                  phone={installer.phone}
                                  mobile={installer.mobile}
                                  email={installer.email}  />
                      </Link>
                  </li>
               ))
            }
          </ul>
      <div className='h-10 w-10 bg-slate-300 rounded-full border-2 transition ease-in-out delay-150 hover:scale-110 duration-300 border-black shadow-2xl shadow-black flex items-center justify-center fixed bottom-4 right-3'>
          <Plus/>
      </div>
    </main>
  );
}
