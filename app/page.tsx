import isSession from './components/session'
import {redirect} from 'next/navigation'

export default async function Home() {
  const session = await isSession()
  if(!session){
    return redirect('/signIn')
  }
  return (
    <main>
      lol
    </main>
  );
}
