import './App.css';
import { useEffect, useState } from 'react';
import napp from "./napp.png";
import searchbutton from "./searchbutton.png"
import MyNutritionComponent from './MyNutritionComponent';
import { LoaderPage } from "./LoaderPage"

function App() {

const MY_ID = "0766ddc8";
const MY_KEY = "25132912c7e75ec17ee03f4d197867b3";
const MY_URL = " https://api.edamam.com/api/nutrition-details"

const [mySearch, setMySearch] = useState("");
const [myNutrit, setMyNutrit] = useState();
const [wordSubmitted, setWordSubmitted] = useState('');
const [myLoader, setMyLoader] = useState(false);

const fetchData = async (ingr) => {
  setMyLoader(true);
}

  const response = await fetch(`${MY_URL}?app_id=${MY_ID}&app_key=${MY_KEY}`,{
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingr: ingr })
  })
  
  if(response.ok){
    setMyLoader(false);
    const data = await response.json();
    setMyNutrit(data);
  }
  else {
    setMyLoader (false);
    alert ('ingredients entered incorrectly');
  }

const myNutritSearch = e => {
  setMySearch(e.target.value);
}
const finalSearch = e => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}

useEffect(() => {
  if (wordSubmitted !== '') {
    let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
    fetchData(ingr);
  }
}, [wordSubmitted])


  return (
    <div>
      {myLoader && <LoaderPage />}

    <div className='allContainers'>

      <div className='container'>
      <h1>Nutrition Facts</h1>
        <img className='cover' src={napp} width="800px" alt='cover'/>
      </div>

      <div className='containerSearch'>
        <form onSubmit={finalSearch}>
          <input placeholder='Search...' onChange={myNutritSearch} value={mySearch} />
        </form>
        <button>
          <img className='search' src={searchbutton} alt="search"/>
          </button>
      </div>
            </div>


{myNutrit && Object.values(myNutrit.totalNutrients).map (({label,quantity,unit}) => 
  <MyNutritionComponent
   label={label}
   quantity={quantity}
   unit={unit}
  />
)} 
    </div>
  )
}

  

export default App;



