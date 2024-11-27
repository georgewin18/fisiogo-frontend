import { redirect } from "next/navigation"
import { getSession } from "../actions/getSession"

const PasienPage = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect("/login")
  }

  return (
    <div>
      <h1>
        Ini halaman Pasien
      </h1>
    </div>
  )
}

export default PasienPage