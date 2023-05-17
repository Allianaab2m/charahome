import { getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"

export default async function Home() {
  const session = await getServerSession(authOptions)
  const user = session?.user

  return (
    <>
      <div>Page</div>
      <p>{JSON.stringify(user)}</p>
    </>
  )
}
