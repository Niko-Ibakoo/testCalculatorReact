import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form className="d-flex justify-content-center align-items-center mt-5 mx-auto max-width-800">
      <FormControl type="text" placeholder="Search for a recipe" className="mr-auto" />
      <Button variant="primary">Search</Button>
    </Form>
    
  );
};

export default SearchBar;
