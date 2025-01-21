
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="bg-blue-400 rounded p-2 hover:bg-blue-600 hover:scale-110">Signin with Google</button>
    </form>
  )
} 