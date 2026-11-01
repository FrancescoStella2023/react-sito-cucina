import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
    return (
        <div className="card h-100">
            <img className="card-img-top recipe-img"
                src={`http://127.0.0.1:8000/storage/${recipe.image}`}
                alt={recipe.title} />

            <div className="card-body d-flex flex-column">
                <h4 className="card-title">{recipe.title}</h4>
                <p className="card-text">
                    {recipe.description.slice(0, 100) + '...'}
                </p>
                <p className='my-3'>
                    <strong> Autore: <i>{recipe.author.name}</i> </strong>
                </p>
                <Link
                    to={`/recipes/${recipe.id}`}
                    className="btn btn-primary mt-auto"
                >
                    Leggi
                </Link>
            </div>
        </div>
    );
}

export default RecipeCard;