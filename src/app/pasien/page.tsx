import { redirect } from "next/navigation"
import { getSession } from "../actions/getSession"
import Navbar from "../components/navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const PasienPage = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect("/login")
  }

  if (session.isFisioterapis) {
    return (
      <div>
        <h1>Halaman ini hanya untuk Pasien</h1>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-50">
        <h1 className="text-2xl font-bold">Selamat Datang di FisioGo</h1>
        <div className="flex flex-col gap-4">
          <Link href="/jadwalTerapi">
            <Button variant="default" className="w-64">Jadwal Terapi</Button>
          </Link>
          <Link href="/pasien/progress">
            <Button variant="default" className="w-64">Progress Terapi</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PasienPage