import { getDatabase, ref, set } from "firebase/database"
import { app } from "./firebase"
import React from "react"

const db = getDatabase(app)
import "./App.css"
const App = () => {
  const putData = () => [
    set(ref(db, "users/jatin"), {
      id: 1,
      name: "Jatin",
      age: 21,
    }),
  ]
  return (
    <div>
      <h1>Firebase React App</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  )
}

export default App
