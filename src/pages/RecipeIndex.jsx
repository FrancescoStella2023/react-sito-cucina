import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import RecipeCard from '../components/RecipeCard';

function RecipeIndex() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipes').
      then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <>
      <div className='container py-5'>
        <h1 className='mb-4'>Ricettario Stellato</h1>
        <div className='row g-4'>
          {recipes.map(recipe => (
            <div className="col-12 col-md-6 col-lg-4" key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
        <p>Benvenuto nel sito delle ricette!</p>
      </div>
    </>
  )
}

export default RecipeIndex
