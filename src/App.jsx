import { Component, useState } from 'react'
import './App.css'

function App() {
  const food = "Pizza";
  
  const age = "29";
  const skills = ["mern", "node", "design", "enimation", "dsa"];
  const foodName = ["roti", "rice", "bread" , "brutter", "dahi","masala chach"];
  const drink = ["cocacola", "pepsi", "alchol", "soda", "meriral water", "frooti"];

  return (
    <div className="App">
    your favourite food is {food},
    
    <div className='expression'>{1+2 *3}, {2*-4+67}</div>
    <div> you are {age > 18 ? "Eligible" : "Not eligible"} for {drink} </div>
     <div>
       {skills.map((e) => {
         return <Skill skills= {e} />;
       })}
     </div>

     <div>
         {foodName.map((e) => {
           return <Food food= {e} age= "25"/>
         })}
     </div>

      <div>
        {drink.map((e) => {
          return <Drink drink = {e} />
        })}
      </div>

    </div>
  )
}
// Component
function Skill(props) {
  console.log("Skills propes", props)
  return <p className='redtext'> skill: {props.skills}</p>
}

function Food(props) {
  console.log(props.age)
  return <p className='greentext'>food: {props.food}</p>
}

function Drink(props) {
  return <p className='black'>drink: {props.drink}</p>
}

export default App
