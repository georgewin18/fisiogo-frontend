import axios from "axios"
import { getSession } from "./getSession"

interface PasienPost {
  pasien: string
}

interface FisioterapisPost {
  fisioterapis: string
}

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

export const fetchJadwal = async ():Promise<JadwalTerapiInterface[]> => {
  const session = await getSession()
  
  let jadwal

  if (!session.isFisioterapis) {
    const PostData: PasienPost = {
      pasien: session.name as string
    }
  
    const response = await axios.post('http://localhost:3000/api/jadwalTerapi/jadwal', PostData)
    jadwal = response.data
  } else {
    const PostData: FisioterapisPost = {
      fisioterapis: session.name as string
    }
  
    const response = await axios.post('http://localhost:3000/api/jadwalTerapi/jadwal', PostData)
    jadwal = response.data
  }
  
  console.log(jadwal)
  return jadwal
}