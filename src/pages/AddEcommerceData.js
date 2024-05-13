import React, { useState } from "react";
import { Box, Grid, Typography, Button, IconButton, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  id: yup
    .string()
    .required("ID is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{10,}$/,
      "ID must contain at least 10 characters with at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  productName: yup.string().required("Product name is required"),
  brand: yup.string().required("Product Brand is required"),
  category: yup.string().required("Product Category is required"),
  price: yup
    .number()
    .required("Product Price is required")
    .typeError("Product Price must be a number"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  // images: yup
  // .array()
  // // .required("Images are required")
  // .min(1, "At least one image is required")
  // .max(10, "Maximum 10 images allowed"),
  images: yup
    .array()
    // .required("Images are required")
    .of(yup.string())
    .min(1, "At least one image is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .max(5, "Rating length must be at most 5 characters"),
  discountPercentage: yup
    .number()
    .required("Product Discount Percent is required")
    .typeError("Product Discount Percent must be a number")
    .max(100, "Product Discount Percent length must be at most 100%"),
});

const AddEcommerceData = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [images, setImages] = useState(() => {
    const storedImages = JSON.parse(localStorage.getItem("formDataImages"));
    return storedImages || [];
  });

  const handleImageChange = (e) => {
    const filesArray = Array.from(e.target.files);
    const newImages = [...images];
    for (const file of filesArray) {
      const reader = new FileReader();
      reader.onload = () => {
        newImages.push(reader.result);
        setImages(newImages);
        // localStorage.setItem("formDataImages", JSON.stringify(newImages));
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const formData = { ...data, images };
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    const formDataArray = Array.isArray(existingData) ? existingData : [];
    formDataArray.push(formData);
    localStorage.setItem("formData", JSON.stringify(formDataArray));
    reset();
    setImages([]);
    localStorage.removeItem("formDataImages");
    navigate("/products");
  };

  const handleDeleteImage = (index) => {
    const filteredImages = images.filter((_, i) => i !== index);
    setImages(filteredImages);
    // localStorage.setItem("formDataImages", JSON.stringify(filteredImages));
  };




  const categories = JSON.parse(localStorage.getItem("CategoryTypesDataTotalLength")) || {};

  const [customCategory, setCustomCategory] = useState("");

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    if (value === "Other") {
      setCustomCategory("");
    } else {
      setCustomCategory(value);
    }
  };

  console.log(customCategory, "customCategorycustomCategorycustomCategory")




  return (
    <Box className="!text-center  !w-full">
      <Typography
        variant="h6"
        className="!p-2 animate__animated !text-base 9xl:!text-xl animate__flipInX !bg-green-500 text-white !justify-cenwter !grid !w-full !text-center !font-semibold"
      >
        Add Form of Ecommerce products
      </Typography>
      <Box className="animate__zoomIn !px-5 animate__animated">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            item
            spacing={4}
            container
            className="!m-0 !w-full !mt-10"
            gap={4}
          >
            <Grid
              sx={12}
              md={6}
              gap={3}
              className="!m-auto !grid !bg-white rounded-md !pt-5 !pb-8 !px-8"
            >
              <div className="textField-class">
                <TextField
                  label="ID"
                  className="!border-2 !border-white  !text-white"
                  variant="standard"
                  color="success"
                  {...register("id")}
                  error={!!errors.id}
                  helperText={errors.id?.message}
                />
              </div>
              <div className="textField-class">
                <TextField
                  label="Product Name"
                  className="!border-2 !border-white  !text-white"
                  variant="standard"
                  color="success"
                  {...register("productName")}
                  error={!!errors.productName}
                  helperText={errors.productName?.message}
                />
              </div>
              <div className="textField-class">
                <TextField
                  label="Product Brand"
                  variant="standard"
                  color="success"
                  {...register("brand")}
                  error={!!errors.brand}
                  helperText={errors.brand?.message}
                />
              </div>
              {/* <div className="textField-class">
                <TextField
                  label="Product Category"
                  color="success"
                  variant="standard"
                  {...register("category")}
                  error={!!errors.category}
                  helperText={errors.category?.message}
                />
              </div> */}




              <div className="textField-class">
                <TextField
                  select
                  label="Product Category"
                  color="success"
                  variant="standard"
                  {...register("category")}
                  error={!!errors.category}
                  helperText={errors.category?.message}
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              {customCategory === "Other" && (
                <div className="textField-class">
                  <TextField
                    label="Custom Category"
                    color="success"
                    variant="standard"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                  />
                </div>
              )}
















              <div className="textField-class">
                <TextField
                  label="Product Price"
                  color="success"
                  variant="standard"
                  {...register("price")}
                  error={!!errors.price}
                  helperText={errors.price?.message}
                />
              </div>
              <div className="textField-class">
                <TextField
                  label="Product Discount Price"
                  color="success"
                  variant="standard"
                  {...register("discountPercentage")}
                  error={!!errors.discountPercentage}
                  helperText={errors.discountPercentage?.message}
                />
              </div>
              <div className="textField-class">
                <TextField
                  label="Title"
                  color="success"
                  variant="standard"
                  {...register("title")}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              </div>
              <div className="textField-class">
                <TextField
                  label="Description"
                  color="success"
                  variant="standard"
                  {...register("description")}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              </div>
              <div className="textField-class">
                <TextField
                  label="Rating out of 5"
                  color="success"
                  variant="standard"
                  {...register("rating")}
                  error={!!errors.rating}
                  helperText={errors.rating?.message}
                />
              </div>
              <div className="textField-class">
                <div className="xl:!grid-cols-3 !gap-4 lg:!grid-cols-2 !grid-cols-1 !grid">
                  {images?.map((image, index) => (
                    <div
                      className="!w-full"
                      key={index}
                      style={{ position: "relative" }}
                    >
                      <img
                        src={image}
                        alt={`Uploaded ${index}`}
                        style={{
                          width: "100%",
                          // minWidth: "100%",
                          minHeight: "130px",
                          maxHeight: "130px",
                          objectFit: "cover",
                          border: "2px solid black",
                          marginRight: "10px",
                          borderRadius: "10px",
                        }}
                      />
                      <IconButton
                        onClick={() => handleDeleteImage(index)}
                        style={{
                          position: "absolute",
                          top: "0px",
                          borderRadius: "10px",
                          left: "0px",
                        }}
                      >
                        <i className="!border-2 !w-full !rounded !border-black !text-black !bg-white bx bxs-trash-alt"></i>
                      </IconButton>
                    </div>
                  ))}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="!border-2 !w-full !border-red-600 !mt-5 !py-[20px] px-4 "
                />
              </div>
              {errors.images && (
                <Typography color="error">{errors.images.message}</Typography>
              )}
              <Button
                variant="contained"
                className="!text-white !text-sm !font-bold !mt-5 !bg-black !capitalize !py-3"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default AddEcommerceData;
