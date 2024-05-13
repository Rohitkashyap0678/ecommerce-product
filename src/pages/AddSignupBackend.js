import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const AddSignupBackend = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  
  const [productsData, setProductsData] = useState();
  useEffect(() => {
    // fetch("http://localhost:8080/api/products/")
    fetch("http://localhost:8080/api/products/")
      .then((response) => response.json())
      .then((result) => {
        setProductsData(result);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  console.log(productsData, "productsDataproductsDataproductsData");


  // const fetchProductsData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/products/");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch product data");
  //     }
  //     const result = await response.json();
  //     console.log("Product data:", result);
  //   } catch (error) {
  //     console.error("Error fetching product data:", error);
  //   }
  // };

  
  // fetchProductsData();
  










  return (
    <>
      
      <form
        onSubmit={handleSubmit}
        className="max-w-md !mt-36 mx-auto p-4 bg-gray-100 shadow-md rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddSignupBackend;
