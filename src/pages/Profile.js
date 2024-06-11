import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import profileBlack from "../assets/profileBlack.jpeg";
import DeleteIcon from "@mui/icons-material/Delete";

const schema = yup.object().shape({
  name: yup.string().required("Name is Required *"),
  occupation: yup.string().required("Occupation is required *"),
  bio: yup.string().required("Bio is required *"),
});

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    data.profileImage = image || "";
    localStorage.setItem("profileData", JSON.stringify(data));
  };

  const [profileDetail, setProfileDetail] = useState({});
  useEffect(() => {
    const storedProfileDetail =
      JSON.parse(localStorage.getItem("profileData")) || {};
    setProfileDetail(storedProfileDetail); 
  }, []);

  // console.log(profileDetail?.profileImage, "profileDetail");

  const clearDataLocalStorage = ()=>{
    localStorage.removeItem("profileData")
    setProfileDetail("");
    reset();
    register("")
  } 

  return (
    <>
      <Box className="container !m-auto pb-10 !px-5 9xl:!px-10">
        <Box className="!mt-10">
          <Box>
            <Typography
              variant="h4"
              className="!text-black !py-3 animate__fadeInDown animate__animated !rounded !px-5 !font-semibold !bg-white !text-xl !flex"
            >
              Please Check and Updated your Profile...
            </Typography>
          </Box>

          <Box className="!mt-6 !p-0 9xl:!p-5 border-2 rounded-md animate__zoomIn animate__animated !border-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Card
                  sx={{
                    width: "100%",
                    bgcolor: "black",
                    boxShadow: "lg",
                  }}
                >
                  <CardContent
                    sx={{ alignItems: "center", textAlign: "center" }}
                  >
                      <Box className="!relative !border-4 !rounded-full  !mx-auto !justify-center !border-white  !w-fit !p-1  !flex">
                        <input
                          type="file"
                          accept="image/*"
                          id="avatar"
                          style={{ display: "none" }}
                          onChange={handleImageUpload}
                        />
                        <label htmlFor="avatar">
                          <img
                            src={
                              image
                                ? image
                                : profileDetail?.profileImage || profileBlack
                            }
                            alt="Avatar"
                            className="!flex !object-cover !cursor-pointer !rounded-full !h-32 !w-32"
                          />
                          <Chip
                            label="Edit"
                            sx={{ border: "2px solid white !important" }}
                            className="!font-semibold !h-[26px] edit-chip-profile !cursor-pointer !rounded-full !border-2 !bg-black -500 !right-0 !bottom-0 !absolute"
                          />
                        </label>
                      </Box>
                    {errors.profileImage && (
                      <Typography
                        variant="h5"
                        className=" !text-s !text-white !mt-5 !text-base"
                      >
                        {errors.profileImage.message}
                      </Typography>
                    )}

                    <div className="textField-profile !mt-14">
                      <TextField
                        className="!text-3xl  !font-semibold !text-white"
                        variant="standard"
                        placeholder="Your Name"
                        value={profileDetail?.name}
                        {...register("name")}
                      />
                    </div>
                    {errors.name && (
                      <Typography
                        variant="h5"
                        className="!pt-1 !text-left !text-white !text-base"
                      >
                        {errors.name.message}
                      </Typography>
                    )}

                    <div className="textField-profile   !mt-8 ">
                      <TextField
                        className="!text-3xl !font-semibold !text-white"
                        variant="standard"
                        placeholder="Occupation"
                        value={profileDetail?.occupation}
                        // defaultValue={profileDetail?.occupation}
                        {...register("occupation")}
                      />
                    </div>
                    {errors.occupation && (
                      <Typography
                        variant="h5"
                        className="!pt-1 !text-left !text-white !text-base"
                      >
                        {errors.occupation.message}
                      </Typography>
                    )}

                    <div className="textField-profile-description  !mt-8 !w-full">
                      <TextField
                        className="!text-3xl  !font-semibold !text-white"
                        variant="standard"
                        multiline
                        maxRows={6}
                        placeholder="Hello, this is my bio and I am This."
                        defaultValue={profileDetail?.bio}
                        {...register("bio")}
                      />
                    </div>
                    {errors.bio && (
                      <Typography
                        variant="h5"
                        className="!pt-1 !text-left !text-white !text-base"
                      >
                        {errors.bio.message}
                      </Typography>
                    )}

                    <Box className="!mt-14 !items-center !gap-4 !flex">
                      <Button
                        type="submit"
                        className={`!flex !text-white button-save s hovewr:!text-black !w-full !capitalize !qbg-black !mt-4 !text-lg !font-bold !text-center !items-center 
                    `}
                        sx={{ border: "2px solid white !important" }}
                      >
                        Save
                      </Button>
                      <IconButton onClick={clearDataLocalStorage} className="!bg-white !relative top-2 !text-black">
                        <DeleteIcon className=" !text-black !w-6 !h-6 " />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;