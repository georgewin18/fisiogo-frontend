import Link from "next/link"
import { Button } from "@/components/ui/button"

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Selamat Datang di <span className="text-blue-500">FisioGO</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Kelola jadwal dan progres terapi Anda dengan mudah dan efisien.
        </p>
        <Link href="/login">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Masuk ke Akun Anda
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
