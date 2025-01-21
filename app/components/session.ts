import {auth} from '@/auth'

export default async function isSession(){
    const session = await auth()
    if (session){
        return true
    }else{
        return false
    }
}