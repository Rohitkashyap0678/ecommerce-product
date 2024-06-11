import { Box, Typography } from "@mui/material";
import CoomonHeaderTextButton from "../common/CoomonHeaderTextButton";
import CommonCrousalData from "../common/CommonCrousalData";
import { useEffect, useState } from "react";
import Toast from "../common/Toast";

const Favourite = () => {
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

  // const data = JSON.parse(localStorage.getItem("formData"));
  // const favoriteItems = data?.filter((item) => favorites[item.id]);

  const formData = JSON.parse(localStorage.getItem("formData")) || [];
  const jsonStoreData = JSON.parse(localStorage.getItem("jsondataStore")) || [];

  const favoriteItems = Array.from(
    new Set(
      [...formData, ...jsonStoreData].filter((items) => favorites[items.id])
    )
  );

  // const panelType = localStorage.getItem("panelType")
  return (
    <Box className="container !m-auto pb-10 px-10">
      <CoomonHeaderTextButton
        ProductsName="Favourite"
        BUttonName="Add Favourite"
        LinkRoute="/products"
        // panelType={panelType}
      />

      <Box className="">
        <Box className=" !border-t-2 !border-white">
          {favoriteItems?.length !== 0 ? (
            <>
              <CommonCrousalData
                data={favoriteItems}
                toggleFavorite={handleToggleFavorite}
                favorites={favorites}
              />
               {showToast && <Toast type={toastType} text={toastText} />}
            </>
          ) : (
            <>
              <Box className="!px-8 !py-10 !mt-24 !border-white animate__animated  animate__zoomIn  !border-2 !w-fit !items-center !grid !mx-auto">
                <Typography
                  variant="h1"
                  className="!font-bold  !text-white !text-center !text-4xl"
                >
                  Nothing be Favourite{" "}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Favourite;
