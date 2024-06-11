import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SliderSlick from "./SliderSlick";
import LongMenu from "../ui/LongMenu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';

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
                className="!border-2 animate__animated animate__zoomIn !bg-white !border-white !relative"
              >
             
                <SliderSlick
                  silderImage={items?.images}
                  thumbNail={items?.thumbnail}
                />
                <Box className="p-5 min-h-[248px]  bg-white">
                  <Box className="!grid 9xl:!flex !gap-2  !mt-6 !items-center justify-between">
                    <Typography variant="h6" className="text-black !text-lg">
                      {items?.brand}
                    </Typography>
                    <Box className=" !items-center !flex">
                      {renderStars(items?.rating)}
                      <span className="!text-black ml-2 mt-1">
                        ({items?.rating})
                      </span>
                    </Box>
                  </Box>
                  <Box className="right-4 bg-black cursor-pointer rounded-full  top-[17px] border border-white !absolute">
                    {/* <i className="bx bx-dots-vertical-rounded relative top-[2px]"></i> */}
                    <span className="!relative !top-[2px]">
                      <LongMenu data={data} />
                    </span>
                  </Box>
                  <Box className="right-14 !w-7 !h-7 bg-black cursor-pointer rounded-full top-[18px] border border-white !absolute">
                    {favorites[items?.id] ? (
                      <FavoriteIcon
                        onClick={() => toggleFavorite(items?.id)}
                        className="!p-[3px] !left-[1px] !top-[1px] !relative"
                      />
                    ) : (
                      <FavoriteBorderIcon
                        onClick={() => toggleFavorite(items?.id)}
                        className="!p-[3px] !left-[1px] !top-[1px] !relative"
                      />
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    className="text-white font-semibold py-1 px-2 !text-sm right-24 bg-black  top-4 border-2 rounded-md border-white !absolute"
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
                  <Typography
                    variant="h6"
                    className="!text-sm !mb-12 !text-gray-400 two-liner-ellipsis"
                  >
                    {items?.description}
                  </Typography>
                  <Box className="!flex !absolute !left-0 !px-3 !w-full !bottom-0 !gap-3 !items-center my-3">
                    <Button className="!text-black !flex hoverButtonBuyProduct  !items-center !py-2 !gap-2 !bg-blackk !w-full !capitalize !text-sm 9xl:!text-base !font-semibold">
                      <LocalMallIcon className="!w-5 !h-5" />Buy Product
                    </Button>
                    <Button className="!font-semibold !gap-2  !item-center !py-2 !flex !capitalize  !w-full !text-sm 9xl:!text-base !bg-black !text-white">
                      <ShoppingCartIcon className="!w-5 !h-5" /> Add To Cart
                    </Button>
                  </Box>
                  {/* <Typography
                    variant="h6"
                    className="!text-sm !mt-4 !text-gray-400 !text-ellipsis !overflow-hidden !whitespace-nowrap !py-1 !border-red-600  !border-2 "
                  >
                    <span className="!rounded-sm !mr-2 !px-1 !py-1 !border-r-2 !border-red-600 !text-red-600 !bg-red-200">
                      &nbsp;Unique Id:{" "}
                    </span>{" "}
                    {items?.id}
                  </Typography> */}
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
