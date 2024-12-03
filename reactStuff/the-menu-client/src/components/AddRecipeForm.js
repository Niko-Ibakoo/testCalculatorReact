import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [message,setMessage] = useState('')
  const navigate = useNavigate();


  //post request
  const postRecipe = () => {
    axios
      .post("http://localhost:5000/api/recipes", {
        title,
        image,
        ingredients,
        description,
      })
      .then((response) => {
        if (response.status === 200) {
          setTitle("");
          setImage("");
          setIngredients("");
          setDescription("");
          setMessage(response.data.message) // Retrieve the message from the response data
          setTimeout(() => {
               navigate('/');
          }, 2000);
        } else {
          throw new Error('Something went wrong');
        }
      })
 
      .catch((error) => {
        console.error("Error adding recipe:", error);
      });
  };
  

  //convert image to string
  function convertToBase6(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  //submit form logic
  const handleSubmit = (e) => {
    e.preventDefault();
    postRecipe();
  };

  //handle image upload
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase6(file);
    setImage(base64);
  };

  return (
    <>
      <h1 style={{color:'rgb(30, 30, 59)'}} className="text-center">Add a new recipe</h1>
      <Form
        onSubmit={handleSubmit}
        className="container justify-content-center align-items-center my-4 mx-auto max-width-800"
      >
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="ingredients">
          <Form.Label>Ingredients:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter ingredients, separated by commas"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Recipe Description:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        {/* image upload logic here */}
        <input
          type="file"
          accept=".jpeg, .png , .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <br />
       {image == "" || image == null ? (
          ""
        ) : (
          <img style={{ width: "200px", height: "100px" }} src={image} alt="" />
        )} <span style={{color:'green'}}>{message}</span>

        <Button
          className="d-flex align-items-center my-4 justify-content-center"
          variant="primary"
          type="submit"
        >
          Add Recipe
        </Button>
      </Form>
    </>
  );
};

export default AddRecipeForm;
