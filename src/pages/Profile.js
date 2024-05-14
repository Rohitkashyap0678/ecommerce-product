import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProfileImage from "../assets/ProfileImage.JPG";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  occupation: yup.string().required("Occupation is required"),
  bio: yup.string().required("Bio is required"),
});

const Profile = () => {
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Box className="container !m-auto pb-10 px-10">
        <Box className="!mt-10">
          <Box>
            <Typography
              variant="h4"
              className="!text-black !py-3 !rounded !px-5 !font-semibold !bg-white !text-xl !flex"
            >
              Please Check and Updated your Profile...
            </Typography>
          </Box>

          <Box className="!mt-6 !p-5 border-2 rounded-md  !border-white">
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
                    <Box className="!relative !border-4 !rounded-full !mb-10 !mx-auto !justify-center !border-white  !w-fit !p-1  !flex">
                      {/* <Avatar
                        className="!flex   !h-32 !w-32"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Chip
                        sx={{ border: "4px solid white !important" }}
                        className="!h-9 !rounded-full !w-9  !border-2 !bg-green-500 !right-0 !bottom-0 !absolute"
                      /> */}

                      <input
                        type="file"
                        accept="image/*"
                        id="avatar"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                      />
                      <label htmlFor="avatar">
                        <img
                          src={image ? image : ProfileImage}
                          //   src={ProfileImage}
                          alt="Avatar"
                          className="!flex !object-cover !cursor-pointer !rounded-full !h-32 !w-32"
                        />
                        <Chip
                          sx={{ border: "4px solid white !important" }}
                          className="!h-9 !rounded-full !w-9  !border-2 !bg-green-500 !right-0 !bottom-0 !absolute"
                        />
                      </label>
                    </Box>

                    <div className="textField-profile !mt-8">
                      <TextField
                        className="!text-3xl  !font-semibold !text-white"
                        variant="standard"
                        defaultValue={"Rohit kashyap"}
                        {...register("name")}
                      />
                    </div>
                    {errors.name && (
                      <Typography
                        variant="h5"
                        className="!pt-1 !text-left !text-white !text-base"
                      >
                        Name is Required *
                      </Typography>
                    )}

                    <div className="textField-profile   !mt-8 ">
                      <TextField
                        className="!text-3xl !font-semibold !text-white"
                        variant="standard"
                        defaultValue={"Developer"}
                        {...register("occupation")}
                      />
                    </div>
                    {errors.occupation && (
                      <Typography
                        variant="h5"
                        className="!pt-1 !text-left !text-white !text-base"
                      >
                        occupation is Required *
                      </Typography>
                    )}

                    <div className="textField-profile-description  !mt-8 !w-full">
                      <TextField
                        className="!text-3xl  !font-semibold !text-white"
                        variant="standard"
                        multiline
                        maxRows={6}
                        {...register("bio")}
                        defaultValue={
                          "Hello, this is my bio and I am Rohit Kashyap. I am a developer and I love to code. and Now I'm working on creating a website."
                        }
                      />
                    </div>
                    {errors.occupation && (
                      <Typography
                        variant="h5"
                        className="!pt-1 !text-left !text-white !text-base"
                      >
                        Bio is Required *
                      </Typography>
                    )}

                    <Box className="!mt-14">
                      <Button
                        type="submit"
                        className={`!flex  !text-white !transition-all hover:!bg-white hover:!text-black !w-full !capitalize !bg-black !mt-4 !text-lg !font-bold !text-center !items-center 
                    `}
                        sx={{ border: "2px solid white !important" }}
                      >
                        Save
                      </Button>
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
