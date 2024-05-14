import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const HomePage = ({ openDashboardPage }) => {
  const [showPanelTypeChangeModal, setShowPanelTypeChangeModal] =
    useState(false);
  const [selectedPanelTypeChange, setSelectedPanelTypeChange] = useState("");

  const saveAdminPanelTypeInLocalstorage = (panelType) => {
    localStorage.setItem("panelType", panelType);
  };

  const panelTypeSet = localStorage.getItem("panelType");

  return (
    <>
      <Box className="!w-full !px-5 9xl:!px-0 !min-h-[100vh] !items-center !flex !h-full">
        <Box className="!border-2 !w-full !h-full !min-h-[400px] !mx-auto !block !max-w-[600px] !rounded-md !border-white">
          <Box className="!border-white !border-b-2">
            <Typography
              variant="h3"
              className=" !font-semibold !px-4 py-3 !text-white animate__fadeIn  animate__animated !text-center !text-xl"
            >
              Please select whether you are an Admin or a User
            </Typography>
          </Box>

          <Box className="xxl:!mt-[80px] !mt-10">
            <Grid
              container
              spacing={3}
              className="breakPointLargeWidth !m-0 !w-full"
            >
              <Grid
                className="animate__zoomIn animate__animated !p-0"
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
              >
                <Box className="xxl:!border-r-2 !h-full !relative !justify-center !grid !cursor-pointer !border-white">
                  <AdminPanelSettingsIcon className="!h-28 !w-28 !m-auto !text-center !items-center  !flex" />
                  {panelTypeSet === "admin" ? (
                    <CheckCircleIcon className="!right-8 !h-8 !w-8 !top-3 !absolute" />
                  ) : (
                    <CheckCircleOutlinedIcon className="!right-8 !h-8 !w-8 !top-3 !absolute" />
                  )}
                  <Typography
                    variant="h1"
                    onClick={() => {
                      setShowPanelTypeChangeModal(true);
                      setSelectedPanelTypeChange("admin");
                    }}
                    className={`!flex transition-button  !mt-4 !text-2xl !font-bold !text-center !items-center 
                    ${
                      panelTypeSet === "admin"
                        ? "!text-black !bg-white"
                        : " !text-white !bg-black"
                    }`}
                  >
                    Admin Panel
                  </Typography>
                </Box>
              </Grid>
              <Grid
                className="animate__zoomIn animate__animated !p-0"
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
              >
                <Box className="!justify-center !relative !mb-10 xxl:!mb-0 xxl:!mt-0 !mt-5 !grid !cursor-pointer">
                  <AccountCircleIcon className="!h-28 !w-28 !items-center !m-auto !text-center !flex" />
                  {panelTypeSet === "user" ? (
                    <CheckCircleIcon className="!right-8 !h-8 !w-8 !top-3 !absolute" />
                  ) : (
                    <CheckCircleOutlinedIcon className="!right-8 !h-8 !w-8 !top-3 !absolute" />
                  )}
                  <Typography
                    variant="h1"
                    onClick={() => {
                      setShowPanelTypeChangeModal(true);
                      setSelectedPanelTypeChange("user");
                    }}
                    className={`!flex transition-button  !mt-4 !text-2xl !font-bold !text-center !items-center 
                    ${
                      panelTypeSet === "user"
                        ? "!text-black !bg-white"
                        : " !text-white !bg-black"
                    }`}
                    // className="!flex transition-button !text-white !mt-4 !text-2xl !font-bold !text-center !items-center"
                  >
                    User Panel
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      {showPanelTypeChangeModal && (
        <Box className="!fixed !top-0 !left-0 !z-[999] 9xl:!px-0 !px-5 !w-full !h-full !bg-black !bg-opacity-80 !flex !justify-center !items-center">
          <Box className="!bg-black !text-white !p-8 !rounded-md !border-2 !border-white">
            <Typography variant="h3" className="!text-lg !font-semibold !mb-4">
              Are you sure you want to select this to panel?
            </Typography>
            <Box className="!container !mt-5 flex !justify-center">
              <Box className="!mr-4">
                <button
                  className="!px-8 !py-2 !bg-white !text-black !rounded-md !mr-2"
                  onClick={() => setShowPanelTypeChangeModal(false)}
                >
                  No
                </button>
              </Box>
              <Box>
                <button
                  className="!px-8 !py-2 !bg-white !text-black !rounded-md"
                  onClick={() => {
                    saveAdminPanelTypeInLocalstorage(selectedPanelTypeChange);
                    openDashboardPage();
                    setShowPanelTypeChangeModal(false);
                  }}
                >
                  Yes
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default HomePage;
