import { fetchProgress } from "@/app/actions/fetchUserProgress"
import { getSession } from "@/app/actions/getSession"
import Navbar from "@/app/components/navbar"
import ProgressCard from "@/app/components/progressCard"
import { redirect } from "next/navigation"

const ProgressTerapi = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect("/login")
  }

  const progressTerapi = (await fetchProgress()) || []

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-gray-100 pt-8">
        <h1 className="text-3xl font-bold text-gray-800">Progress Terapi</h1>
        <hr className="w-3/4 border-t-2 border-gray-300 my-6" />
        {progressTerapi.length > 0 ? (
          progressTerapi.map((progress) => (
            <ProgressCard
              key={progress.title} 
              title={progress.title}
              sesi_total={progress.sesi_total}
              sesi_selesai={progress.sesi_selesai}
              skor_progress={progress.skor_progress}
            />
          ))
        ) : (
          <p className="text-gray-500 mt-4">Belum ada jadwal terapi.</p>
        )}
      </div>
    </div>
  )
}

export default ProgressTerapi