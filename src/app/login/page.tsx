"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { Button, Input, InputGroup, InputRightElement, Stack } from "../common/components"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/client"
import { signIn as signInByNextAuth } from "next-auth/react"

interface PasswordInputProps {
  setPw: Dispatch<SetStateAction<string>>
}

const PasswordInput = ({ setPw }: PasswordInputProps) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        onChange={(e)=>setPw(e.target.value)}
        placeholder="パスワード"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "非表示" : "表示"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

interface EmailInputProps {
  setEmail: Dispatch<SetStateAction<string>>
}

const EmailInput = ({ setEmail }: EmailInputProps) => {
  return (
    <Input
      pr="4.5rem"
      type="email"
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="メールアドレス"
    />
  )
}

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {
    if (!email) return
    if (!password) return
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const idToken = await userCredential.user.getIdToken()
      await signInByNextAuth("credentials", { 
        idToken,
        callbackUrl: "/"
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Stack spacing={4}>
        <EmailInput setEmail={setEmail} />
        <PasswordInput setPw={setPassword} />
        <Button type="button" onClick={() => {login()}}>
          ログイン
        </Button>
      </Stack>
    </>
  )
}

export default Login

