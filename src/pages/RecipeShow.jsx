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
            <div className='container py-5'>
                <Link to="/" className="btn btn-secondary mb-4">
                    Torna alle ricette
                </Link>
                <div className="card">
                    <img
                        src={`http://127.0.0.1:8000/storage/${recipe.image}`}
                        className="card-img-top recipe-img"
                        alt={recipe.title}
                    />

                    <div className="card-body">
                        <h1>{recipe.title}</h1>
                        <p>{recipe.description}</p>
                        <p>
                            <strong>Autore:</strong> {recipe.author?.name}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeShow
