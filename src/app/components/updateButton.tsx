"use client"

import { useState, useTransition } from "react"
import axios from "axios"
import { redirect } from "next/navigation"

interface UpdateButtonProps {
  scheduleId: string
  jadwalId: string
}

interface PostData {
  schedule_id: string
  status: string
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ scheduleId, jadwalId }) => {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState("")

  const postData:PostData = {
    schedule_id: scheduleId,
    status: "Selesai"
  }

  const handleUpdate = async () => {
    startTransition(async () => {
      try {
        const response = await axios.patch("http://localhost:3000/api/jadwalTerapi", postData)

        if (response.status === 201) {
          setStatus("Selesai")
        } else {
          throw new Error("Failed to update status")
        }
        console.log(jadwalId)
      } catch (error) {
        console.error("Error:", error)
        alert("Gagal memperbarui status")
      }
      redirect(`/jadwalTerapi/${jadwalId}`)
    })
  }

  return (
    <button
      onClick={handleUpdate}
      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:bg-gray-400"
      disabled={isPending || status === "Selesai"}
    >
      {isPending ? "Updating..." : status === "Selesai" ? "Completed" : "Update"}
    </button>
  )
}

export default UpdateButton
