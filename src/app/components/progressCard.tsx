import Link from "next/link"

interface ProgressCardProps {
  title: string
  sesi_total: number
  sesi_selesai: number
  skor_progress: number
}

const ProgressCard = ({ title, sesi_total, sesi_selesai, skor_progress }: ProgressCardProps) => {
  return (
    <div key={title} className="w-3/4 bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700 mt-2">Sesi Selesai: {sesi_selesai} / {sesi_total}</p>
      <p className="text-sm text-gray-500 mt-2">Skor Progress: <b>{skor_progress}%</b></p>
    </div>
  )
}

export default ProgressCard
