import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SliderSlick from "./SliderSlick";

const CommonCrousalData = ({ data, toggleFavorite, favorites }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStarsRatingShow = Math.floor(rating);
    const hasHalfStarRatingShow = rating % 1 !== 0;
    for (let i = 0; i < fullStarsRatingShow; i++) {
      stars.push(<StarIcon className="!text-yellow-500" key={i} />);
    }
    if (hasHalfStarRatingShow) {
      stars.push(
        <StarHalfIcon className="!text-yellow-500" key={fullStarsRatingShow} />
      );
    }
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <StarOutlineIcon
          className="!text-yellow-500"
          key={fullStarsRatingShow + i}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <Box className="!mt-10 lg:!grid-cols-2 !grid-cols-1 !gap-20 !grid">
        {data?.map((items, index) => {
          const discountedPrice = (
            items.price -
            (items.price * items.discountPercentage) / 100
          ).toFixed(2);

          return (
            <>
              <Box
                key={index}
                className="!border-2 animate__animated  animate__zoomIn  !border-white !relative"
              >
                <SliderSlick
                  silderImage={items?.images}
                  thumbNail={items?.thumbnail}
                />
                <Box className="p-5 min-h-[248px] bg-white">
                  <Box className="!grid 9xl:!flex !gap-2  !mt-6 !items-center justify-between">
                    <Typography variant="h6" className="text-black !text-lg">
                      {items?.brand}
                    </Typography>
                    <Box className=" !items-center !flex">
                      {renderStars(items?.rating)}
                      <span className="!text-black ml-2 mt-1">({items?.rating})</span>
                    </Box>
                  </Box>
                  <Box className="right-4 bg-black cursor-pointer rounded-full  top-[18px] border border-white !absolute">
                    <i className="bx bx-dots-vertical-rounded relative top-[2px]"></i>
                  </Box>
                  <Box className="right-11 bg-black cursor-pointer rounded-full top-[18px] border border-white !absolute">
                    {favorites[items?.id] ? (
                      <FavoriteIcon
                        onClick={() => toggleFavorite(items?.id)}
                        className="!p-[4px]"
                      />
                    ) : (
                      <FavoriteBorderIcon
                        onClick={() => toggleFavorite(items?.id)}
                        className="!p-[4px]"
                      />
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    className="text-white font-semibold py-1 px-2 !text-sm right-20 bg-black  top-4 border-2 rounded-md border-white !absolute"
                  >
                    {items?.category}
                  </Typography>
                  <Typography variant="h6" className="text-gray-500 !text-lg">
                    {items?.title}
                  </Typography>
                  <Box className="flex items-center gap-2 mt-3">
                    <Typography
                      variant="h6"
                      style={{
                        textDecorationLine: "line-through",
                        textDecorationStyle: "solid",
                      }}
                      className="!text-base !text-red-800"
                    >
                      {items?.price}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="!text-lg text-green-600"
                    >
                      {items?.discountPercentage}%
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    className="!text-xl !font-semibold text-green-700"
                  >
                    Rs {discountedPrice}
                  </Typography>
                  <Typography variant="h6" className="!text-sm !text-gray-400">
                    {items?.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    className="!text-sm !mt-4 !text-gray-400 !text-ellipsis !overflow-hidden !whitespace-nowrap !py-1 !border-red-600  !border-2 "
                  >
                    <span className="!rounded-sm !mr-2 !px-1 !py-1 !border-r-2 !border-red-600 !text-red-600 !bg-red-200">
                      &nbsp;Unique Id:{" "}
                    </span>{" "}
                    {items?.id}
                  </Typography>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default CommonCrousalData;
