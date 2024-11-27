'use client'

import { useState } from 'react'

import { Button } from "@/components/ui/button"
import UserLoginForm from '../components/userLoginForm'
import FisioterapisLoginForm from '../components/fisioterapisLoginForm'

export default function LoginPage() {
  const [isFisioterapisLogin, setIsFisioterapisLogin] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-4">
          {isFisioterapisLogin ? 'Fisioterapis Login' : 'User Login'}
        </h3>
        {isFisioterapisLogin ? <FisioterapisLoginForm /> : <UserLoginForm />}
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            onClick={() => setIsFisioterapisLogin(!isFisioterapisLogin)}
            className="w-full"
          >
            Switch to {isFisioterapisLogin ? 'User' : 'Fisioterapis'} Login
          </Button>
        </div>
      </div>
    </div>
  )
}

