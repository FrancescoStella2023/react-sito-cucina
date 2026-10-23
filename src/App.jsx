import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import RecipeCard from './components/RecipeCard';

function App() {
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
        <h1 className='mb-4'>Il mio ricettario</h1>
        <div className='row g-4'>
          {recipes.map(recipe => (
            <div>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
        <p>Benvenuto nel sito delle ricette!</p>
      </div>
    </>
  )
}

export default App
