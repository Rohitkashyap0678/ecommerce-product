import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, Container } from "@mui/material";
import CoomonHeaderTextButton from "../common/CoomonHeaderTextButton";
import StarIcon from "@mui/icons-material/Star";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DiamondIcon from "@mui/icons-material/Diamond";
// import WebhookExample from "./components/WebhookExample";
// // import BarGraph from "./components/BarGraph";
// import EnhancedComponent from "./components/HighOrderComponents";

const useStyles = () => ({
  card: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: "#1b8ae92e",
    // boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 11px 4px",
    // borderRadius: "10px",
    minHeight: "156px",
    textAlign: "center",
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "rows",
    alignItems: "center",
    // justifyContent: "space-between",
    // justifyContent: "space-around",
    height: "100%",
    width: "100%",
  },
  title: {
    marginBottom: "8px",
    textAlign: "left",
  },
  count: {
    // fontSize: "32px",
    marginBottom: "4px",
    textAlign: "right",
  },
  icon: {
    // fontSize: "48px",
    // color: "#009688",
    // color: "var(--primary)",
    textAlign: "left",

    // marginRight: '8px',
  },
});

export default function Dashboard() {
  const classes = useStyles();
  const people = [
    { name: "James", age: 31 },
    { name: "John", age: 45 },
    { name: "Paul", age: 65 },
    { name: "Ringo", age: 49 },
    { name: "George", age: 34 },
  ];

  // // for using the filter method
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers, "evennNumbersevennNumbersevennNumbers");

  // // second name for using include from in the arrray of string
  const names = ["James", "John", "vipJey", "JjRii", "GJeorgej"];

  // var a = 25;
  // var a = 28;
  let anytheingNumber = 34;
  const number = anytheingNumber;
  console.log(number, "value of a");

  console.log(people?.name, "name");

  // adding two array combined two arrays using with concat and sepread operator
  const arrayOne = ["a", "b", "c", "d"];
  const arrayTwo = [1, 2, 3, 4];
  const combinedArray = arrayOne.concat(arrayTwo);
  console.log(combinedArray, "combinedArraycombinedArray");

  // using map function for arrays
  const myArray = ["apple", "banana", "orange"];

  const myList = myArray.map((index, item) => <p key={index}>{item}</p>);

  // Function Declaration arrow function and multipication
  var a = "302";
  var b = 10;
  function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(3, 5));
  // Arrow Function
  let addition = (a, b) => {
    return a + b;
  };
  console.log(addition(3, 5));

  // using arrays method new set
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var set = new Set(arr);
  let setarr = [...set];
  console.log(set, "setarrrrrrrrrrr");

  //  object destrructuring changeing name and created with a new name from api, json and any format
  let anyTheingArrayName = {
    fullName: "Skycap co.",
    type: "Technologies",
    location: "Mohali, Chandigargh",
  };

  let { fullName: CompanyName, location: companyLocation } = anyTheingArrayName;
  // console.log(anyTheingArrayName.fullName)
  console.log(
    "company Name is " + CompanyName + " which is located in " + companyLocation
  );

  var arrayFirst = [10, 20, 30, 40, 50, 60];
  // var arrayFirst = ["10", "20", "30", "40"];
  const sumOfArray = (sum, num) => {
    return sum + num;
  };
  const newFunctionAny = () => {
    console.log(arrayFirst.reduce(sumOfArray), "new arraysss");
  };
  newFunctionAny();

  const [favorites, setFavorites] = useState({});
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);
  const favouritesTotalLength = Object.keys(favorites);


  const fiveStarRatingTotalLength = JSON.parse(localStorage.getItem("fiveStarRatingTotalLength")) || {};

  const categoryTypesTotalLength =  JSON.parse(localStorage.getItem("CategoryTypesDataTotalLength")) || {};
  
  const totalProductLengthData = JSON.parse(localStorage.getItem("productTotalLength"));



  // const objectConsoled = {26: true, 27: true, 28: true, 29: true}
  // const consoledLength = Object.keys(objectConsoled);
  // console.log(consoledLength, "consoledLength")



  return (
    <main className="min-h-screen !m-auto items-center !px-5 9xl:!px-12 xl:!px-24 !container !p-5">
      {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:bg-gray-200  lg:dark:bg-zinc-800/30">
    NextJs, ReactJs Practise
      </p> */}

      <CoomonHeaderTextButton
        ProductsName="Dashboard"
        BUttonName="jker"
        ButtonLength={true}
        LinkRoute="/add-products"
      />

      <Box className="">
        <Box className=" !border-t-2 !border-white">
          {/* <Box className="!mt-10 lg:!grid-cols-2 !grid-cols-1 !gap-20 !grid"> */}

          <Grid container spacing={3} className="breakPointLargeWidth !mt-5">
            <Grid className="animate__fadeInUp animate__animated " item xs={12} sm={12} md={12} lg={6} xl={3}>
              <Link to="/products" underline="none">
                <Card
                  sx={{
                    ...classes.card,
                    backgroundColor: "#198df114",
                  }}
                  className="!bg-slate-100 commonShadow commonBorderRadius "
                >
                  <CardContent
                    sx={classes.content}
                    className="lg:!justify-between !justify-between !items-center"
                  >
                    <div>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={classes.title}
                        className="!font-semibold !text-gray-500 !text-[16px]"
                      >
                        Total Products
                      </Typography>
                      <Typography
                        variant="h4"
                        component="p"
                        className="!text-center !font-bold !text-[28px]"
                        sx={classes.count}
                      >
                        {totalProductLengthData}
                      </Typography>
                    </div>
                    <DiamondIcon
                      className="!text-[48px] md:!text-[58px] !rounded-full !p-3  !text-white !bg-black"
                      sx={classes.icon}
                    />
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid className="animate__fadeInUp animate__animated " item xs={12} sm={12} md={12} lg={6} xl={3}>
              <Link to="/five-star-rating" underline="none">
                <Card
                  sx={{
                    ...classes.card,
                    backgroundColor: "#198df114",
                  }}
                  className="!bg-slate-100 commonShadow commonBorderRadius "
                >
                  <CardContent
                    sx={classes.content}
                    className="lg:!justify-between !justify-between !items-center"
                  >
                    <div>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={classes.title}
                        className="!font-semibold !text-gray-500 !text-[16px]"
                      >
                        Five Star Products
                      </Typography>
                      <Typography
                        variant="h4"
                        component="p"
                        className="!text-center !font-bold !text-[28px]"
                        sx={classes.count}
                      >
                        {fiveStarRatingTotalLength?.length}
                      </Typography>
                    </div>
                    <StarIcon
                      className="!text-[48px] md:!text-[58px] !rounded-full !p-3 !text-white !bg-black"
                      sx={classes.icon}
                    />
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid className="animate__fadeInUp animate__animated " item xs={12} sm={12} md={12} lg={6} xl={3}>
              <Link to="/category" underline="none">
                <Card
                  sx={{
                    ...classes.card,
                    backgroundColor: "#198df114",
                  }}
                  // 8f8fa4
                  className="!bg-slate-100 commonShadow commonBorderRadius "
                >
                  <CardContent
                    sx={classes.content}
                    className="lg:!justify-between !justify-between !items-center"
                  >
                    <div>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={classes.title}
                        className="!font-semibold !text-gray-500 !text-[16px]"
                      >
                        Category
                      </Typography>
                      <Typography
                        variant="h4"
                        component="p"
                        className="!text-center !font-bold !text-[28px]"
                        sx={classes.count}
                      >
                        {categoryTypesTotalLength?.length}
                      </Typography>
                    </div>
                    <CategoryIcon
                      className="!text-[48px] md:!text-[58px] !rounded-full !p-3 !text-white !bg-black"
                      sx={classes.icon}
                    />
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid className="animate__fadeInUp animate__animated " item xs={12} sm={12} md={12} lg={6} xl={3}>
              <Link to="/favourite" underline="none">
                <Card
                  sx={{
                    ...classes.card,
                    backgroundColor: "#198df114",
                  }}
                  className="!bg-slate-100 commonShadow commonBorderRadius"
                >
                  <CardContent
                    sx={classes.content}
                    className="lg:!justify-between !justify-between !items-center"
                  >
                    <div>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={classes.title}
                        className="!font-semibold  !text-gray-500 !text-[16px]"
                      >
                        Favourite
                      </Typography>
                      <Typography
                        variant="h4"
                        component="p"
                        className="!text-center !font-bold !text-[28px]"
                        sx={classes.count}
                      >
                        {favouritesTotalLength?.length}
                      </Typography>
                    </div>
                    <FavoriteIcon
                      className="!text-[48px] md:!text-[58px] !rounded-full !p-3  !text-white !bg-black"
                      sx={classes.icon}
                    />
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          </Grid>

          {/* </Box> */}
        </Box>
      </Box>

      <Box className="!mt-[600px]">
        <Link to="/products">
          <Button
            className="!bg-red-600 !font-bold md:!text-xl !rounded-md !capitalize !py-3 md:!px-24 !m-auto !text-white"
            variant="contained"
          >
            Go to Ecommerce Products{" "}
          </Button>
        </Link>

        <Box className="bg-green-600 text-white font-semibold p-4 w-full">
          {/* <ComponentA />
<ComponentB /> */}
        </Box>

        <Box className="gap-6 grid">
          {/* total sum of arrays methods  */}
          {arrayFirst.reduce(sumOfArray)}&nbsp; &nbsp; total value add sum of
          arrays
          {/* evenNumbers from arrays  */}
          <h1>{evenNumbers}</h1>
          {/* second name filter  */}
          {names
            .filter((name) => name.includes("j"))
            .map((filteredName) => (
              <Box className="items-center bg-red-400 text-white font-semibold px-4 py-2 rounded flex">
                {filteredName}
              </Box>
            ))}
          {/* map function render  */}
          {people
            .filter((person) => person.age < 60)
            .map((filteredPerson) => (
              <Box className="items-center bg-red-400 text-white font-semibold px-4 py-2 rounded flex">
                {filteredPerson.name}
              </Box>
            ))}
          {/* combined two array  */}
          {combinedArray}
          {/* for show even numbers  */}
          {number}
          {/* map function for using arrays   */}
          <Typography variant="h6">Map function list :- {myList}</Typography>
          {/* Hooks (useState, useEffect, useContext, useCallback) */}
          <Typography
            variant="h5"
            className="p-2 w-fit mt-3 !mb-0 bg-green-300 text-white"
          >
            useEffect:-
          </Typography>{" "}
          manipulating of Dom, data fetching or used for subscription.
          <Typography
            variant="h5"
            className="p-2 w-fit mt-3 !mb-0 bg-green-300 text-white"
          >
            useState:-
          </Typography>{" "}
          update state when component re-render and its manage the state in
          functional component.
          <Typography
            variant="h5"
            className="p-2 w-fit mt-3 !mb-0 bg-green-300 text-white"
          >
            useContext:-
          </Typography>{" "}
          it access the data in tree for context.
          <Typography
            variant="h5"
            className="p-2 w-fit mt-3 !mb-0 bg-green-300 text-white"
          >
            useCallback:-
          </Typography>{" "}
          this call the function when its unneccssarrryy re-render.
          <Typography
            variant="h5"
            className="p-2 w-fit mt-3 !mb-0 bg-green-300 text-white"
          >
            useMemo:-
          </Typography>{" "}
          it returns a ref object with a current property. ref object is
          mutable.
          <Typography variant="h5" className="mt-8">
            arrays and string difference and type
          </Typography>
          1. Array 2. String
          <br />
          1. is a linear data structure that holds group of elements having the
          same data types.A string is object that defines series of characters.
          2. It can be both one and two-dimensional. String is always
          two-dimensional.
          <br />
          1. It has the ability to hold any of the data types. It has the
          ability to store only char data types. 2. Here the contiguous memory
          is used to store the elements of the array.
          <br />
          1. Strings are kept on the heap area in a different memory area called
          String Constant pool. 2. Arrays have fixed size. String also has fixed
          size but it can be modified through char pointer.
          <br />
          1. These are mutable. These are immutable. 2. It can save the integer,
          float and doubles. It can only store char value.
          {/* redux and useContext difference between with advantages and disadvantages  */}
          <br />
          1. Redux provides a global store that can be accessed from anywhere in
          the application, 2. whereas useContext provides a scoped way to access
          context within a specific component and its descendants.
          <nr />
          12. Redux involves more setup and boilerplate code compared to using
          useContext, especially for smaller applications or simple state
          management needs.
          <br />
          1. Redux is more suitable for larger applications with complex state
          management requirements, 2. while useContext is ideal for simpler
          cases or when the state is needed only within a certain subtree of
          components.
        </Box>
      </Box>
    </main>
  );
}
