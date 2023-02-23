import iconCheck from './icon-check.png';
import {
    BrowserRouter as Router,

    Link
  } from 'react-router-dom';
function MyRecipeComponent ({label, imageRecipe, calories, ingredients, link}) {
    return (
    <div>
        <div className='container'>
            <h2>{label}</h2>
        </div>
        <div className='container'>
            <img src={imageRecipe} alt='foto' className='foto'/>
        </div>
        <div className='container'>
            <p className='par'>{Math.floor(calories)} calories</p>
        </div>
        <ul className='list'>
            {ingredients.map ((ingredient, id) => (
                <li key={id}><img src={iconCheck} alt='icon-check' width='25px'/>{ingredient}</li>
            ))}
        </ul>
        <Router>
        <nav className='container'>
            <Link to={link} target="_blank" className='page'>go to recipe page</Link>
        </nav>
        </Router>
    </div>
    )

}
export default MyRecipeComponent;