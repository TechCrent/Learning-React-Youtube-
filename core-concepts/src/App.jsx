import {Welcome} from "./Welcome";
import Button from "./Button";
import {Greeting} from "./Greeting"
import { CardWrapper } from "./CardWrapper";
import './App.css'
import { Card } from "./Card";


function App() {
  return (
    <div>
      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batman@jl.com</p>
        <button>Edit profile</button>
      </CardWrapper>

      <Greeting name="Bruce" />
      <Greeting />
      <Greeting />


      <h1>Codevolution React Course</h1>
      <Welcome />
      <Button/>
      </div>
  )
}

export default App
