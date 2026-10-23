import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
    return (
        <div className="card h-100">
            <img className="card-img-top recipe-img"
                src={`http://127.0.0.1:8000/storage/${recipe.image}`}
                alt={recipe.title} />

            <div className="card-body">
                <h4 className="card-title">{recipe.title}</h4>
                <p className="card-text">{recipe.description}</p>
                <Link
                    to={`/recipes/${recipe.id}`}
                    className="btn btn-primary"
                >
                    Leggi
                </Link>
                <p>
                    Autore: {recipe.author.name}
                </p>
            </div>
        </div>
    );
}

export default RecipeCard;