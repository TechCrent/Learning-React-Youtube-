import { Card } from "./Card";
import {Welcome} from "./Welcome";
import Button from "./Button";
import {Greeting} from "./Greeting"
import { CardWrapper } from "./CardWrapper";
import {UserDetails} from "./UserDetails"
import { ProductList } from "./ProductList";
import './App.css'



function App() {
  return (
    <div>
      <ProductList/>
      <UserDetails 
      name="Bruce Wayne" 
      isOnline={true} 
      isPremium={true} 
      isNewUser={true}
      role ={"admin"}/>

      <UserDetails name="Clark Kent" isOnline={false} role={"vip"}/>

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
