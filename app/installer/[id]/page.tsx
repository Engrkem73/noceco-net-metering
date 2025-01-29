import React from 'react'
import { PageProps } from '@/app/components/types'
import { installers } from '@/app/collections/installers'
import {consumers} from '../../collections/consumers'
import ConsumerCardList from '@/app/components/ConsumerCardList'
import { Installer } from '@/app/components/types'
import { Consumer } from '../../components/types'

const page = async ({params}: PageProps) => { 
    const resolvedParams = await params
    const id = await resolvedParams.id

    const installer = ():Installer => {
      for(let i = 0; i < installers.length; i++){
        if(installers[i].id === Number(id)){
          return installers[i]
        }  
    }return {
      id: 0,
      name: "",
      phone: "",
      mobile: "",
      email: "",
      address: {
        purok: "",
        barangay : "",
        city: "",
      },
      contactPerson: {
        name : "",
        phone: "",
        mobile: "",
        email: "",
      },
      company: ""
    }
    }
    
    if(!installer() || installer().id === 0){
      return (
        <div>
          No Installer found
        </div>
      )
    }

    const filteredConsumers : Consumer[]= consumers.filter((consumers) => consumers.installer?.includes(installer().name))
    
  return (
    <main className='flex flex-col justify-center items-center p-4 gap-5'>
      <section className='w-full max-w-2xl'>
        <table className='w-full border-collapse'>
          <tbody>
            <tr>
              <td className='font-bold p-2 border'>Name</td>
              <td className='p-2 border text-center font-bold' colSpan={2}>{installer().name}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border'>Company</td>
              <td className='p-2 border text-center' colSpan={2}>{installer().company}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border' rowSpan={3}>Address</td>
              <td className='font-bold p-2 border'>Sto/Purok</td>
              <td className='p-2 border'>{installer()?.address?.purok}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border'>Brgy.</td>
              <td className='p-2 border'>{installer().address?.barangay}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border'>City/Municipality</td>
              <td className='p-2 border'>{installer().address?.city}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border' rowSpan={2}>Contact</td>
              <td className='font-bold p-2 border'>Email</td>
              <td className='p-2 border'>{installer().email}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border'>Phone</td>
              <td className='p-2 border'>{installer().phone}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border' rowSpan={4}>Contact Person</td>
              <td className='p-2 border text-center font-bold' colSpan={2}>{installer().contactPerson?.name}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border'>Email</td>
              <td className='p-2 border'>{installer().contactPerson?.email}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border'>Phone</td>
              <td className='p-2 border'>{installer().contactPerson?.phone}</td>
            </tr>
            <tr>
              <td className='font-bold p-2 border'>Mobile</td>
              <td className='p-2 border'>{installer().contactPerson?.mobile}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div>
        <h2 className='font-bold text-xl'>List of Consumers</h2>
      </div>
      <section className='flex flex-col justify-center items-center'>
        <ConsumerCardList filteredConsumers={filteredConsumers}/>
      </section>
    </main>
  )
}

export default page