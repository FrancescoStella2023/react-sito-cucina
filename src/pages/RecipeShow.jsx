import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function RecipeShow() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recipes/${id}`).
            then(response => {
                setRecipe(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [id])

    if (!recipe) {
        return <p>Caricamento... </p>
    }

    return (
        <>
            <div className='bg-light bg-gradient min-vh-100 d-flex flex-column'>
                <header className='bg-dark p-4 mb-4'>
                    <Link to="/" className="btn btn-primary">
                        Torna alle ricette
                    </Link>
                </header>

                <div className="card">
                    <img
                        src={`http://127.0.0.1:8000/storage/${recipe.image}`}
                        className="card-img-top recipe-img"
                        alt={recipe.title}
                    />

                    <div className="card-body">
                        <h1>{recipe.title}</h1>
                        <p>{recipe.description}</p>
                    </div>
                </div>
                <footer className='footer d-flex justify-content-center align-items-center mt-auto bg-dark text-white'>
                    <strong className='me-1'>Autore:</strong> {recipe.author?.name}
                </footer>
            </div>
        </>
    )
}

export default RecipeShow
