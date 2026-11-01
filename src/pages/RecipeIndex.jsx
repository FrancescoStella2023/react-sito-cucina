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
      <div className='bg-light bg-gradient min-vh-100 d-flex flex-column'>
        <header className='bg-dark p-1 mb-4'>
          <h1 className='mb-4 text-white'>Ricettario Stellato</h1>
        </header>
        <div className='row g-4 p-3'>
          {recipes.map(recipe => (
            <div className="col-12 col-md-6 col-lg-4" key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
        <footer className='footer d-flex justify-content-center align-items-center mt-auto bg-dark text-white'>
          Ricettario Stellato - 2026
        </footer>
      </div>
    </>
  )
}

export default RecipeIndex
