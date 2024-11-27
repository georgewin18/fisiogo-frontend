"use server"

import { redirect } from "next/navigation";
import { getSession } from "./getSession";
import axios from "axios";

interface PostData {
  email: string
}

export const userLogin = async (
  prevState: { error: undefined | string }, 
  formData: FormData
) => {
  const session = await getSession();

  const formEmail = formData.get("email") as string
  const formPassword = formData.get("password") as string

  const postData: PostData = {
    email: formEmail
  }

  const response = await axios.post('http://localhost:3000/api/pasien/email', postData);
  const userdata = response.data
  const userData = userdata[0]
  console.log(userData)

  if (userData === undefined) {
    return { error: "wrong credentials" }
  }

  if (formEmail !== userData.email && formPassword !== userData.password) {
    return { error: "wrong credentials" };
  }

  session.email = formEmail;
  session.isFisioterapis = false;
  session.isLoggedIn = true;

  await session.save()
  redirect("/pasien")
};