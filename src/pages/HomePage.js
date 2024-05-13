import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const HomePage = ({ openDashboardPage }) => {
  const saveAdminPanelTypeInLocalstorage = (panelType) => {
    localStorage.setItem("panelType", panelType);
    openDashboardPage();
  };

  return (
    <>
      <Box className="!w-full  !min-h-[100vh] !items-center !flex !h-full">
        <Box className="!border-2 !w-full !h-full !min-h-[400px] !mx-auto !block !max-w-[600px] !rounded-md !border-white">
          <Box className="!border-white !border-b-2">
            <Typography
              variant="h3"
              className=" !font-semibold !px-4 py-3 !text-white animate__fadeIn  animate__animated !text-center !text-xl"
            >
              Please select You are a Admin and user
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
                <Box
                  onClick={() => saveAdminPanelTypeInLocalstorage("admin")}
                  className="xxl:!border-r-2 !h-full  !justify-center !grid !cursor-pointer !border-white"
                >
                  <AdminPanelSettingsIcon className="!h-28 !w-28 !m-auto !text-center !items-center  !flex" />
                  <Typography
                    variant="h1"
                    className="!flex transition-button !text-white !mt-4 !text-2xl !font-bold !text-center !items-center"
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
                <Box
                  onClick={() => saveAdminPanelTypeInLocalstorage("user")}
                  className="!justify-center !mb-10 xxl:!mb-0 xxl:!mt-0 !mt-5 !grid !cursor-pointer"
                >
                  <AccountCircleIcon className="!h-28 !w-28 !items-center !m-auto !text-center !flex" />
                  <Typography
                    variant="h1"
                    className="!flex transition-button !text-white !mt-4 !text-2xl !font-bold !text-center !items-center"
                  >
                    user Panel
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
