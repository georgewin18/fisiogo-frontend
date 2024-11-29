import { fetchJadwalById } from "@/app/actions/fetchJadwalById"
import { getSession } from "@/app/actions/getSession"
import Navbar from "@/app/components/navbar"
import UpdateButton from "@/app/components/updateButton"
import { notFound } from "next/navigation"

const JadwalDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  const jadwalDetail = await fetchJadwalById(id)
  const session = await getSession()

  if (!jadwalDetail) {
    notFound()
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">{jadwalDetail.title}</h1>
        <p className="text-gray-700 mb-4">Detail : {jadwalDetail.detail}</p>

        <div className="mb-6">
          <p className="text-sm text-gray-500">Pasien: {jadwalDetail.pasien}</p>
          <p className="text-sm text-gray-500">Fisioterapis: {jadwalDetail.fisioterapis}</p>
        </div>

        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Tanggal</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              {session.isFisioterapis && <th className="border border-gray-300 px-4 py-2">Action</th>}
            </tr>
          </thead>
          <tbody>
            {jadwalDetail.schedule.map((schedule) => (
              <tr key={schedule._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{String(schedule.date).slice(0, 10)}</td>
                <td className="border border-gray-300 px-4 py-2">{schedule.status}</td>
                {session.isFisioterapis && (
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <UpdateButton scheduleId={schedule._id} jadwalId={jadwalDetail._id} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JadwalDetail