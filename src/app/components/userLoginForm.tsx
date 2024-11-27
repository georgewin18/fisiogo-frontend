'use client'

import { userLogin } from '../actions/userLogin'
import { useActionState, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <Button type="submit" disabled={pending} className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
      {pending ? 'Logging in...' : 'User Login'}
    </Button>
  )
}

export default function UserLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [state, formAction] = useActionState<any, FormData>(userLogin, undefined)

  return (
    <form action={ formAction } className="mt-4">
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <div className="flex sm:flex-row sm:items-center sm:justify-center mt-4">
        <SubmitButton />
      </div>
      <div className="mt-4 text-sm text-center">
        <a href="#" className="text-blue-600 hover:underline">Register Account</a>
      </div>
      { state?.error && <p>{state.error}</p> }
    </form>
  )
}

