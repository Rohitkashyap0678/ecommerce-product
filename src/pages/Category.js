import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import CoomonHeaderTextButton from "../common/CoomonHeaderTextButton";
import CommonCrousalData from "../common/CommonCrousalData";

const useStyles = makeStyles({
  menuPaper: {
    borderRadius: "8px",
    border: "4px solid",
  },
});

const Category = () => {
  const classes = useStyles();
  const [favorites, setFavorites] = useState({});
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);

  const formData = JSON.parse(localStorage.getItem("formData")) || [];
  const jsonStoreData = JSON.parse(localStorage.getItem("jsondataStore")) || [];

  const dataCategoryMapFunction = Array.from(
    new Set([...formData, ...jsonStoreData].map((items) => items?.category))
  );

  const [categoryOptionSelecter, setCategoryOptionSelector] = useState(
    localStorage.getItem("selectedCategory") || ""
  );

  const changeCategoryOptionSelect = (event) => {
    const selectedCategory = event.target.value;
    setCategoryOptionSelector(selectedCategory);
    localStorage.setItem("selectedCategory", selectedCategory);
  };

  const findCategoryData = formData
    .concat(jsonStoreData)
    .filter((item) => item.category === categoryOptionSelecter);

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

  // localStorage.setItem("CategoryDataTotalLength", JSON.stringify(findCategoryData.map((items) => items.category)))
  localStorage.setItem("CategoryTypesDataTotalLength", JSON.stringify(dataCategoryMapFunction))

  return (
    <div>
      <Box className="container !m-auto pb-10 px-10">
        <CoomonHeaderTextButton
          ProductsName="Category Select"
          BUttonName="Add Category"
          LinkRoute="/add-products"
        />
        <Box className="">
          <Box className="!border-t-2 !border-white">
            <Box className="!mt-10 animate__animated animate__fadeInDown">
              <FormControl fullWidth className="form-control-selecter">
                <InputLabel id="demo-simple-select-label">
                  Select Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="twilio-selector"
                  label="Select Category"
                  onChange={changeCategoryOptionSelect}
                  value={categoryOptionSelecter}
                  MenuProps={{ classes: { paper: classes.menuPaper } }}
                >
                  {dataCategoryMapFunction.map((categoryMaped, index) => {
                    return (
                      <MenuItem key={index} value={categoryMaped}>
                        {categoryMaped}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>

            <Typography
              variant="h1"
              className="!text-white animate__animated  animate__fadeInLeft  !mt-10 !font-bold !text-4xl"
            >
              {categoryOptionSelecter}
            </Typography>

            {findCategoryData.length !== 0 ? (
              <>
                <CommonCrousalData
                  toggleFavorite={handleToggleFavorite}
                  favorites={favorites}
                  data={findCategoryData}
                />
              </>
            ) : (
              <>
                <Box className="!px-8 !py-10 !mt-24 animate__animated animate__fadeInDown !border-white !border-2 !w-fit !items-center !grid !mx-auto">
                  <Typography
                    variant="h1"
                    className="!font-bold  !text-white !text-center !text-4xl"
                  >
                    Please Select Category
                    <br />
                    <br />
                    <span className="!pt-10">
                      No Product found for this Category
                    </span>
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

export default Category;

// import { Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { makeStyles } from "@mui/styles";
// import CoomonHeaderTextButton from "../common/CoomonHeaderTextButton";
// import CommonCrousalData from "../common/CommonCrousalData";

// const useStyles = makeStyles({
//   menuPaper: {
//     borderRadius: "8px",
//     border: "4px solid",
//   },
// });

// const Category = () => {
//   const classes = useStyles();
//   const [favorites, setFavorites] = useState({});
//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
//     setFavorites(storedFavorites);
//   }, []);
//   const handleToggleFavorite = (id) => {
//     const updatedFavorites = { ...favorites };
//     if (updatedFavorites[id]) {
//       delete updatedFavorites[id];
//     } else {
//       updatedFavorites[id] = true;
//     }
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   const data = JSON.parse(localStorage.getItem("formData"));
//   const jsonStoreData = JSON.parse(localStorage.getItem("jsondataStore"));

//   const dataCategoryMapFunction = data
//     ? Array.from(new Set(data.map((items) => items?.category)))
//     : [];

//   const [categoryOptionSelecter, setCategoryOptionSelector] = useState(
//     localStorage.getItem("selectedCategory") || ""
//   );

//   const changeCategoryOptionSelect = (event) => {
//     const selectedCategory = event.target.value;
//     setCategoryOptionSelector(selectedCategory);
//     localStorage.setItem("selectedCategory", selectedCategory);
//   };
//   const findCategoryData = data
//     ? data?.filter((items) => items?.category === categoryOptionSelecter)
//     : [];
//   return (
//     <div>
//       <Box className="container !m-auto pb-10 px-10">
//         <CoomonHeaderTextButton
//           ProductsName="Category Select"
//           BUttonName="Add Category"
//           LinkRoute="/add-products"
//         />

//         <Box className="">
//           <Box className=" !border-t-2 !border-white">
//             <Box className="!mt-10 animate__animated animate__fadeInDown">
//               <FormControl fullWidth className="form-control-selecter">
//                 <InputLabel id="demo-simple-select-label">
//                   Select Category
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   className="twilio-selector"
//                   label="Select Category"
//                   onChange={changeCategoryOptionSelect}
//                   value={categoryOptionSelecter}
//                   MenuProps={{ classes: { paper: classes.menuPaper } }}
//                 >
//                   {dataCategoryMapFunction.map((categoryMaped, index) => {
//                     return (
//                       <MenuItem key={index} value={categoryMaped}>
//                         {categoryMaped}
//                       </MenuItem>
//                     );
//                   })}
//                 </Select>
//               </FormControl>
//             </Box>

//             <Typography
//               variant="h1"
//               className="!text-white animate__animated  animate__fadeInLeft  !mt-10 !font-bold !text-4xl"
//             >
//               {categoryOptionSelecter}
//             </Typography>

//             {findCategoryData?.length !== 0 ? (
//               <>
//                 <CommonCrousalData
//                   toggleFavorite={handleToggleFavorite}
//                   favorites={favorites}
//                   data={findCategoryData}
//                 />
//               </>
//             ) : (
//               <>
//                 <Box className="!px-8 !py-10 !mt-24 animate__animated animate__fadeInDown !border-white !border-2 !w-fit !items-center !grid !mx-auto">
//                   <Typography
//                     variant="h1"
//                     className="!font-bold  !text-white !text-center !text-4xl"
//                   >
//                     Please Select Category
//                     <br />
//                     <br />
//                     <span className="!pt-10">
//                       No Product found for this Category
//                     </span>
//                   </Typography>
//                 </Box>
//               </>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Category;
