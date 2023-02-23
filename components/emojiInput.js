import React,{useState} from "react";

var numberDictionary={
    1:"smiling",
    2:"happy",
    3:"sad",
    4:"wow",
    5:"cool"

};
function App2(){
const  [meaning,setMeaning]= useState("type number");
  function numberInputHandler(event){
      var userInput = event.target.value;
      var meaning = numberDictionary[userInput];
      if(meaning === undefined){
        meaning = "we dont have a meaning";
      }
      setMeaning(meaning);
    }


  return(
    <div>
       <h1> Inside out</h1>
       <input placeholder="type number" onChange={numberInputHandler}/>
        <h2>{meaning}</h2>


    </div>
         




  );
 }
 export default App2