import { useState } from "react";
import "./App.css";

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchRecipes = async (e) => {
    e.preventDefault();

    const searchTerm = query.trim();

    if (!searchTerm) {
      setError("Please enter a recipe name.");
      setRecipes([]);
      return;
    }

    setLoading(true);
    setError("");
    setSelectedRecipe(null);

    try {
      const response = await fetch(`${API_URL}${encodeURIComponent(searchTerm)}`);

      if (!response.ok) {
        throw new Error("Unable to connect to the recipe service.");
      }

      const data = await response.json();

      if (!data.meals) {
        setRecipes([]);
        setError("No recipes found. Try another dish.");
      } else {
        setRecipes(data.meals);
      }
    } catch (err) {
      setRecipes([]);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getIngredients = (recipe) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure || ""} ${ingredient}`.trim());
      }
    }

    return ingredients;
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">AI RECIPE FINDER</p>

          <h1>Find Your Next<br />Delicious Recipe</h1>

          <p className="subtitle">
            Search thousands of recipes and discover something delicious to cook.
          </p>

          <form className="search-box" onSubmit={searchRecipes}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a recipe... e.g. Chicken Curry"
              aria-label="Search recipes"
            />

            <button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>
      </header>

      <main className="container">
        {error && (
          <div className="message error-message">
            {error}
          </div>
        )}

        {!loading && !error && recipes.length === 0 && (
          <div className="welcome">
            <div className="welcome-icon">🍳</div>
            <h2>What are you craving?</h2>
            <p>
              Search for your favorite dish and we'll find recipes for you.
            </p>
          </div>
        )}

        {loading && (
          <div className="message">
            Finding delicious recipes...
          </div>
        )}

        {recipes.length > 0 && (
          <section>
            <div className="section-heading">
              <h2>Recipe Results</h2>
              <span>{recipes.length} recipes found</span>
            </div>

            <div className="recipe-grid">
              {recipes.map((recipe) => (
                <article className="recipe-card" key={recipe.idMeal}>
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                  />

                  <div className="recipe-card-content">
                    <p className="category">
                      {recipe.strCategory || "Recipe"}
                    </p>

                    <h3>{recipe.strMeal}</h3>

                    <p className="area">
                      🌍 {recipe.strArea || "International"}
                    </p>

                    <button
                      className="view-button"
                      onClick={() => setSelectedRecipe(recipe)}
                    >
                      View Recipe →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {selectedRecipe && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedRecipe(null)}
              aria-label="Close recipe"
            >
              ×
            </button>

            <img
              className="modal-image"
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMeal}
            />

            <div className="modal-content">
              <p className="category">
                {selectedRecipe.strCategory || "Recipe"}
              </p>

              <h2>{selectedRecipe.strMeal}</h2>

              <p className="area">
                🌍 {selectedRecipe.strArea || "International"}
              </p>

              <h3>Ingredients</h3>

              <ul className="ingredients">
                {getIngredients(selectedRecipe).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Instructions</h3>

              <p className="instructions">
                {selectedRecipe.strInstructions ||
                  "Instructions are not available for this recipe."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;