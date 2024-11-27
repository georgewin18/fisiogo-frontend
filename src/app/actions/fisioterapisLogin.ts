"use server"

import { redirect } from "next/navigation";
import { getSession } from "./getSession";
import axios from "axios";

interface PostData {
  email: string
}

export const fisioterapisLogin = async (
  prevState: { error: undefined | string }, 
  formData: FormData
) => {
  const session = await getSession();

  const formEmail = formData.get("email") as string
  const formPassword = formData.get("password") as string
  console.log(formEmail)

  const postData: PostData = {
    email: formEmail
  }

  const response = await axios.post('http://localhost:3000/api/fisioterapis/email', postData);
  const userdata = response.data
  const fisioterapisData = userdata[0]
  console.log(userdata)
  console.log(fisioterapisData)

  if (fisioterapisData === undefined) {
    return { error: "wrong credentials" }
  }

  if (formEmail !== fisioterapisData.email && formPassword !== fisioterapisData.password) {
    return { error: "wrong credentials" };
  }

  session.email = formEmail;
  session.isFisioterapis = true;
  session.isLoggedIn = true;

  await session.save()
  redirect("/fisioterapis")
};