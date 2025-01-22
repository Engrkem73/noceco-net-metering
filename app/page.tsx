import isSession from './components/session'
import {redirect} from 'next/navigation'
import InstallerCard from './components/InstallerCard'
import {Installer} from './components/types'

const installers: Installer[] = [
  {
    name: "John Doe",
    phone: "123-456-789",
    mobile: "123-456-789",
    email: "johndoe@fake.com"
  },
  {
    name: "Jane Smith",
    phone: "123-456-789",
    mobile: "123-456-789",
    email: "janesmith@fake.com"
  },
  {
    name: "Alice Johnson",
    phone: "123-456-789",
    mobile: "123-456-789",
    email: "alicejohnson@fake.com"
  },
  {
    name: "Bob Brown",
    phone: "123-456-789",
    mobile: "123-456-789",
    email: "bobbrown@fake.com"
  },
  {
    name: "Charlie Davis",
    phone: "123-456-789",
    mobile: "123-456-789",
    email: "charliedavis@fake.com"
  }
];

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
                <InstallerCard 
                              name={installer.name}
                              phone={installer.phone}
                              mobile={installer.mobile}
                              email={installer.email}  />
              </li>
            ))
          }
      </ul>
      
    </main>
  );
}
