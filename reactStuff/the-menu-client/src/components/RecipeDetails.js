import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const params = useParams();
  const [recipeData, setRecipeData] = useState([]);
  const [ingredients,setIngredients] = useState([])
  const getData = () => {
    axios
      .get(`http://localhost:5000/api/recipes/${params.id}`)
      .then((res) => setRecipeData(res.data));
  };
  

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    <h1 style={{textAlign:'center', marginTop:'40px'}}>{recipeData.title}</h1>
      {recipeData.title && (
        <div className="container-recipe">
          <div className="grid-container">
            <div className="column-left">
              {recipeData.title && (
                <div className="card"><img src={recipeData.image} alt={recipeData.title} /></div>
              )}
            </div>
            <div className="column-right">
              {recipeData.title && (
                <>
                  <h3>INGREDIENTS:</h3>
                  <ul>
                    {recipeData.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="description-row">
          <h3>COOKING DIRECTIONS:</h3>
            {recipeData.description && <p>{recipeData.description}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
