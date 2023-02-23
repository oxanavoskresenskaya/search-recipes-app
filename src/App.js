import './App.css';
import { useCallback, useEffect, useState } from 'react';
import video from './food.mp4';
import icon from './icons-eggs.png';
import MyRecipeComponent from './MyRecipeComponent';
import Special from './Special';
function App() {
  const API_ID = 'a13a93c2';
  const API_KEY = 'ca71c1410357f36df2007a697407abec';

  const [mySearch, setMySearch] = useState('');
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState ('cheese');

  const getRecipe = useCallback (async ()=> {
      const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await responce.json();
      console.log(data.hits);
      setMyRecipe (data.hits);
  })
  useEffect (()=> {
      getRecipe();
    }, [wordSubmitted]);
    const myRecipeSearch = (e) => {
      setMySearch (e.target.value);
    }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted (mySearch);
    setMySearch('');
  }  
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className="container-one">
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
          <button><img src={icon} alt='icon' width='30px' /></button>
        </form>
      </div>   

      <div>
        <Special item = {setWordSubmitted}/>
      </div>

      {myRecipe.map((el, id) => (
            <MyRecipeComponent 
            label={el.recipe.label} 
            imageRecipe={el.recipe.image} 
            calories={el.recipe.calories} 
            ingredients={el.recipe.ingredientLines}
            link={el.recipe.url}
            key={id}/>
      ))}
    </div>
  );
}

export default App;
