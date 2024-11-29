import axios from "axios"
import { getSession } from "./getSession"

interface ProgressInterface {
  title: string
  sesi_total: number
  sesi_selesai: number
  skor_progress: number
}

export const fetchProgress = async (): Promise<ProgressInterface[]> => {
  const session = await getSession()
  const id = session.id

  const response = await axios.get(`http://localhost:3000/api/pasien/${id}`)
  const progress = response.data.progress

  return progress
}