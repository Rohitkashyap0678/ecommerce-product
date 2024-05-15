import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const panelType = localStorage.getItem("panelType");
  return (
    <Box className="!px-5 !gap-20 !h-[70vh] !mt-[260px] !align-middle !items-center !text-center !w-full !justify-evenly">
      <Box className="!mt-10 animate__animated animate__lightSpeedInRight">
        <Typography variant="h4" className="!font-bold">
          404 - Not Found
        </Typography>
      </Box>
      <Box className="!mt-10 animate__animated animate__lightSpeedInLeft">
        <Typography variant="h6">
          The page you are looking for does not exist.
        </Typography>
      </Box>
      <Box className="!mt-10 animate__animated animate__zoomIn">
        <Link to={panelType === "user" ? "/products" : "/dashboard"}>
          <Button
            className="!bg-red-600 !font-bold !text-base 9xl:!text-xl !rounded-md !capitalize !py-3 !px-12 9xl:!px-24 !m-auto !text-white"
            variant="contained"
          >
            Go To {panelType === "user" ? "Product Page" :  "Home page"}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
