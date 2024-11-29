import axios from "axios"
import { notFound } from "next/navigation"

interface schedule {
  _id: string
  date: string
  status: string
}

interface JadwalTerapiInterface {
  _id: string
  pasien: string
  fisioterapis: string
  sessions : number
  schedule: schedule[]
  title: string
  detail: string
  __v: number
}

export const fetchJadwalById = async (id: string): Promise<JadwalTerapiInterface> => {
  try {
    const response = await axios.get(`http://localhost:3000/api/jadwalTerapi/${id}`)
    return response.data
  } catch (error) {
    notFound();
  }
}