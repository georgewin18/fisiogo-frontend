import { redirect } from "next/navigation"
import { getSession } from "../actions/getSession"
import { fetchJadwal } from "../actions/fetchJadwal"
import Card from "../components/card"
import Navbar from "../components/navbar"


const JadwalTerapi = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect("/login")
  }

  const jadwalTerapi = (await fetchJadwal()) || []

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-gray-100 pt-8">
        <h1 className="text-3xl font-bold text-gray-800">Jadwal Terapi</h1>
        <hr className="w-3/4 border-t-2 border-gray-300 my-6" />
        {jadwalTerapi.length > 0 ? (
          jadwalTerapi.map((jadwal) => (
            <Card
              key={jadwal._id}
              _id={jadwal._id}
              title={jadwal.title}
              detail={jadwal.detail}
              pasien={jadwal.pasien}
              fisioterapis={jadwal.fisioterapis}
            />
          ))
        ) : (
          <p className="text-gray-500 mt-4">Belum ada jadwal terapi.</p>
        )}
      </div>
    </div>
  )
}

export default JadwalTerapi