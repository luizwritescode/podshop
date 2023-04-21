import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import CategoryHeader from "./CategoryHeader";

import ShoppingItem from "./ShoppingItem";

const ShoppingList = () => {
  // Dummy data for shopping items
  const shoppingItems = [
    {
      id: 33,
      name: "Item 1",
      price: "9.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 44,
      name: "Item 2",
      price: "19.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 55,
      name: "Item 3",
      price: "29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 332,
      name: "Item 3",
      price: "29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 123,
      name: "Item 3",
      price: "29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Item 3",
      price: "29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Item 3",
      price: "29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Item 3",
      price: "$29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Item 3",
      price: "$29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 99,
      name: "Item 3",
      price: "$29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 999,
      name: "Item 3",
      price: "$29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 9999,
      name: "Item 3",
      price: "$29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 99999,
      name: "Item 3",
      price: "$29.99",
      imageSrc: "https://via.placeholder.com/150",
    },
    // Add more shopping items as needed
  ];

  const categories = [
    { id: 1, name: "Ignite", items: shoppingItems },
    { id: 2, name: "Elfbar", items: shoppingItems },
  ];

  return (
    <Box  mt={4} px={4} width="80vw" overflow="hidden">
      {categories.map((cat) => {
        // render category header

        return (
          <>
            <CategoryHeader key={cat.id} name={cat.name} category={cat.name} />

            <Grid container spacing={2}>
              {cat.items.map((item) => {
                return (
                  <Grid
                    key={item.id}
                    item
                    py={1}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                  >
                    <ShoppingItem key={item.id} item={item} />
                  </Grid>
                );
              })}
            </Grid>
          </>
        );
      })}
    </Box>
  );
};

export default ShoppingList;
