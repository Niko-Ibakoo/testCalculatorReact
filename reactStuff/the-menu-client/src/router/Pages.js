import React from "react";
import Home from "../components/Home";
import AddRecipeForm from "../components/AddRecipeForm";
import { Routes, Route } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addRecipe" element={<AddRecipeForm />} />
      <Route path="/recipeDetails/:id" element={<RecipeDetails/>} />
    </Routes>
  );
};

export default Pages;
