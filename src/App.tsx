// Authentication Tutorial
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "./firebase"
import "./App.css"
const auth = getAuth(app)
const App = () => {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "jatin.prakash.2720@gmail.com",
      "JatinJatin"
    ).then((value) => {
      console.log(value)
    })
  }
  return (
    <div>
      <h1>Firebase React App</h1>
      <button onClick={signupUser}>Create User</button>
    </div>
  )
}

export default App

// Intial tutorial for Showing how it is connecting

// import { getDatabase, ref, set } from "firebase/database"
// import { app } from "./firebase"
// import React from "react"

// const db = getDatabase(app)
// import "./App.css"
// const App = () => {
//   const putData = () => [
//     set(ref(db, "users/jatin"), {
//       id: 1,
//       name: "Jatin",
//       age: 22,
//     }),
//   ]
//   return (
//     <div>
//       <h1>Firebase React App</h1>
//       <button onClick={putData}>Put Data</button>
//     </div>
//   )
// }

// export default App
