import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CoomonHeaderTextButton = ({
  ProductsName,
  BUttonName,
  LinkRoute,
  ButtonLength,
  // panelType,
}) => {
  const panelType = localStorage.getItem("panelType");
  return (
    <div>
      <Box className="flex !mt-6 !items-center !pb-2 9xl:!pb-0 justify-between">
        <Typography
          variant="h2"
          className="!m-auto !font-bold animate__animated  animate__fadeInLeft !text-white !text-center !flex !w-full !text-base 9xl:!text-2xl"
        >
          {ProductsName}
        </Typography>

        {panelType === "admin" && (
          <>
            {ButtonLength !== true && (
              <Button className="!min-w-[auto] !p-0">
                <Link
                  to={LinkRoute}
                  className="!bg-white !px-4  9xl:!px-8  9xl:!mb-2 animate__animated  animate__fadeInRight !whitespace-nowrap !font-bold !text-sm  9xl:!text-base  !rounded !capitalize 9xl:!py-3 !py-2 !m-auto !text-black"
                  variant="contained"
                >
                  {BUttonName}
                </Link>
              </Button>
            )}
          </>
        )}
      </Box>
    </div>
  );
};

export default CoomonHeaderTextButton;
