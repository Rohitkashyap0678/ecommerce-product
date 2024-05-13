import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CoomonHeaderTextButton from "../common/CoomonHeaderTextButton";
import CommonCrousalData from "../common/CommonCrousalData";

const FiveStarRating = () => {
  const [favorites, setFavorites] = useState({});
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);
  const handleToggleFavorite = (id) => {
    const updatedFavorites = { ...favorites };
    if (updatedFavorites[id]) {
      delete updatedFavorites[id];
    } else {
      updatedFavorites[id] = true;
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // const data = JSON.parse(localStorage.getItem("formData"));
  // const dataRatingEqalFive = data?.filter((item) => {
  //   return item.rating === 5;
  // });

  const formData = JSON.parse(localStorage.getItem("formData")) || [];
  const jsonStoreData = JSON.parse(localStorage.getItem("jsondataStore")) || [];

  const dataRatingEqalFive = Array.from(
    new Set(
      [...formData, ...jsonStoreData]?.filter((items) => {
        return items.rating === 5;
      })
    )
  );
  const fiveStarRatingLength = Object.keys(dataRatingEqalFive);
  localStorage.setItem("fiveStarRatingTotalLength", JSON.stringify(fiveStarRatingLength))

  return (
    <div>
      <Box className="container !m-auto pb-10 px-10">
        <CoomonHeaderTextButton
          ProductsName=" Five Star rating"
          BUttonName=" Add FiveStar"
          LinkRoute="/add-products"
        />
        <Box className="">
          <Box className=" !border-t-2 !border-white">
            {dataRatingEqalFive?.length !== 0 ? (
              <>
                <CommonCrousalData
                  data={dataRatingEqalFive}
                  toggleFavorite={handleToggleFavorite}
                  favorites={favorites}
                />
              </>
            ) : (
              <>
                <Box className="!px-8 !py-10 !mt-24 animate__animated  animate__zoomIn  !border-white !border-2 !w-fit !items-center !grid !mx-auto">
                  <Typography
                    variant="h1"
                    className="!font-bold  !text-white !text-center !text-4xl"
                  >
                    No Five Star Rating in any Product
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default FiveStarRating;
