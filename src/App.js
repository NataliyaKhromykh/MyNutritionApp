import './App.css';
import { useEffect, useState } from 'react';
import napp from "./napp.png";
import searchbutton from "./searchbutton.png"
import MyNutritionComponent from './MyNutritionComponent';

function App() {

const MY_ID = "0766ddc8";
const MY_KEY = "25132912c7e75ec17ee03f4d197867b3";

const [mySearch, setMySearch] = useState("");
const [myNutrit, setMyNutrit] = useState();

useEffect(() => {
  const getNutrit = async () => {
  const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${MY_ID}&app_key=${MY_KEY}&nutrition-type=cooking&ingr=1%20cup%20rice%2C%2010%20oz%20chickpeas`)
  const data = await response.json();
  console.log(data);
  setMyNutrit(data);
}
getNutrit()
},[])

const myNutritSearch = (e) => {
  setMySearch(e.target.value)
  console.log(e.target.value)
}

  return (
    <div className='allContainers'>

      <div className='container'>
      <h1>Nutrition Facts</h1>
        <img className='cover' src={napp} width="800px" alt='cover'/>
      </div>

      <div className='containerSearch'>
        <form>
          <input placeholder='Search...' onChange={myNutritSearch} value={mySearch} />
        </form>
        <button>
          <img className='search' src={searchbutton} alt="search"/>
          </button>
      </div>


{myNutrit = Object.values(myNutrit).map (() => 
        <MyNutritionComponent/>
)} 

    </div>
  );
}

export default App;



