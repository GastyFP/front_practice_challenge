import React, { useEffect, useState } from "react";
import {Routes , Route} from "react-router-dom"
import ProductList from "./views/ProductList/ProductList";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import CartDetail from "./views/CartDetail/CartDetail";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5050/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<CartDetail/>}/>
      </Routes>
      {/* Check to see if express server is running correctly */}
      {/* <h5>{response}</h5> */}
    </div>
  );
};

export default App;
