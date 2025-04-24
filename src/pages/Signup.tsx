import { useState } from "react"
import { app } from "../firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const Auth = getAuth(app)

const SignupPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const createUser = () => {
    createUserWithEmailAndPassword(Auth, email, password).then((value) => {
      alert("Success")
      console.log(value)
    })
  }
  return (
    <div className="signup-page">
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Enter Your Email"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter Your Password "
      />
      <button onClick={createUser}>Sign Up</button>
    </div>
  )
}

export default SignupPage
