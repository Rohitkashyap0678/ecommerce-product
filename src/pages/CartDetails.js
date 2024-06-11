import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SliderSlick from "../common/SliderSlick";
import productsData from "../JsonData/ProducsData.json";

const CartDetails = ({ data }) => {
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

  return (
    <>
      <Box className="!px-5 9xl:!px-10 !pb-10 !mt-10 !m-auto !container ">
        {/* <Box className="!w-full !h-full !font-semibold !px-5 !py-3 !text-xl !border-2 !rounded !bg-white !text-black">
          This is a Cart details page
        </Box> */}

        <Box className="!max-h-[600px] !border-2 !overflow-y-auto !overflow-hidden !border-white !h-full  !rounded">
            {combinedArraysTotalProduct?.map((items) => {
              return (
                <>
          <Grid
            container
            spacing={3}
            className="breakPointLargeWidth !px-10  !m-0 !w-full !border-white !border-b-2"
          >
                  <Grid
                    className="animate__fadeInUp animate__animated !px-5  !border-red-600 !border-b-2"
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={5}
                    xl={4}
                  >
                    <span className="">
                      <SliderSlick
                        silderImage={items?.images}
                        thumbNail={items?.thumbnail}
                      />
                    </span>
                  </Grid>
                  <Grid
                    className="animate__fadeInUp animate__animated !p-5 !border-green-600 !border-b-2"
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={7}
                    xl={8}
                  >
                    <h1>lqewhd fioqoif ioe hyfio eowiufh ioew</h1>
                    <h1>lqewhd fioqoif ioe hyfio eowiufh ioew</h1>
                    <h1>lqewhd fioqoif ioe hyfio eowiufh ioew</h1>
                  </Grid>
          </Grid>
                </>
              );
            })}
        </Box>

        <Box></Box>
      </Box>
    </>
  );
};

export default CartDetails;
