import { redirect } from "next/navigation"
import { getSession } from "../actions/getSession"

const FisioterapisPage = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect("/login")
  }

  if (!session.isFisioterapis) {
    return (
      <div>
        <h1>Halaman ini hanya untuk Fisioterapis</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>
        Ini halaman Fisioterapis
      </h1>
    </div>
  )
}

export default FisioterapisPage