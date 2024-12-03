import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import AddRecipeForm from "./AddRecipeForm";
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const getData = () => {
    axios
      .get("http://localhost:5000/api/recipes")
      .then((res) => setRecipeData(res.data));
  };
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <SearchBar />
      <div className="d-flex flex-column align-items-center text-center">
        <h3>or</h3>
        <Link to={"/addRecipe"}>
          <Button variant="primary">
            <span>+</span> add a new one
          </Button>
        </Link>
      </div>
      {recipeData[0]? <div className="grid">
        {recipeData[0] &&
          recipeData.map((item, index) => (
            <Link to={'/recipeDetails/'+ item._id} key={index} className="card">
              <h5 className="title">{item.title}</h5>
              <img src={item.image} alt="" />
            </Link>
          ))}
      </div> : <h3 style={{textAlign:'center', margin:'50px 0'}}>Hold on! I am gettig ALL the recipes available...</h3>}
    </div>
  );
};

export default Home;
