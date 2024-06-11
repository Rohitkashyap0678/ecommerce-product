import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CoomonHeaderTextButton from "../common/CoomonHeaderTextButton";
import CommonCrousalData from "../common/CommonCrousalData";
import productsData from "../JsonData/ProducsData.json";
import Toast from "../common/Toast";

const Products = () => {
  const [favorites, setFavorites] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("");
  const [toastText, setToastText] = useState("");

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);
  // const handleToggleFavorite = (id) => {
  //   const updatedFavorites = { ...favorites };
  //   if (updatedFavorites[id]) {
  //     delete updatedFavorites[id];
  //   } else {
  //     updatedFavorites[id] = true;
  //   }
  //   setFavorites(updatedFavorites);
  //   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  //   setShowToast(true);
  //   setToastType("success");
  //   setToastText("Product added to favorites!");

  // };

  const handleToggleFavorite = (id) => {
    const updatedFavorites = { ...favorites };
    let message = "";
    let type = "";

    if (updatedFavorites[id]) {
      delete updatedFavorites[id];
      message = "Product removed from favorites!";
      type = "warning";
    } else {
      updatedFavorites[id] = true;
      message = "Product added to favorites!";
      type = "success";
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setShowToast(true);
    setToastType(type);
    setToastText(message);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // const dataMapFunctionShow = DynamicData || jsonStoreData ;
  const DynamicData = JSON.parse(localStorage.getItem("formData"));
  const dataMapFunctionShow = DynamicData;
  const dataRating = dataMapFunctionShow?.map((dataMapFunctionShow) => {
    if (dataMapFunctionShow?.rating === 5) {
      return dataMapFunctionShow?.rating;
    } else {
      return "";
    }
  });
  localStorage.setItem("FiveStarRating", JSON.stringify(dataRating));

  localStorage.setItem("jsondataStore", JSON.stringify(productsData));
  const jsonStoreData = JSON.parse(localStorage.getItem("jsondataStore"));
  const jsonDataShowFunction = jsonStoreData;
  const dataRatingFromJsondata = jsonDataShowFunction?.map(
    (jsonDataShowFunction) => {
      if (jsonDataShowFunction?.rating === 5) {
        return jsonDataShowFunction?.rating;
      } else {
        return "";
      }
    }
  );
  localStorage.setItem(
    "FiveStarRatingFromJsonData",
    JSON.stringify(dataRatingFromJsondata)
  );

  const combinedArraysTotalProduct = Array.from(
    new Set([
      ...(Array.isArray(dataMapFunctionShow) ? dataMapFunctionShow : []),
      ...(Array.isArray(jsonDataShowFunction) ? jsonDataShowFunction : []),
    ])
  );

  // const combinedArraysTotalProduct = Array?.from(
  //   new Set([...dataMapFunctionShow, ...jsonDataShowFunction])
  // );
  localStorage.setItem(
    "productTotalLength",
    JSON.stringify(combinedArraysTotalProduct?.length)
  );

  return (
    <Box className="container !m-auto pb-10 px-10">
      <CoomonHeaderTextButton
        ProductsName="Products"
        BUttonName="Add Products"
        LinkRoute="/add-products"
      />

      <Box className="">
        <Box className=" !border-t-2 !border-white">
          <CommonCrousalData
            data={combinedArraysTotalProduct}
            toggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
          {showToast && <Toast type={toastType} text={toastText} />}
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
