import React, { useState } from "react";
import { Typography, Box, Button, IconButton } from "@mui/material";
import {
  Remove as RemoveIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../reducers/cartReducer";

const CheckoutPage = () => {
  const selectedItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(updateQuantity({ id: itemId, quantity: 1 }));
  };

  const handleDecrement = (itemId) => {
    dispatch(updateQuantity({ id: itemId, quantity: -1 }));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {

  }

  const calculateTotal = () => {
    let total = 0;
    for (const item of selectedItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  const BRLFormat = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Box p={3}>
      <Typography variant="h6" color="dodgerblue" gutterBottom mb={2}>
        Check-out
      </Typography>
      {selectedItems.length === 0 ? (
        <Typography variant="body1">seu carrinho está vazio</Typography>
      ) : (
        <Box mt={2}>
          {selectedItems.map((item) => (
            <Box key={item.id} display="flex" alignItems="center" mb={1}>
              <Box flexGrow={1}>
                <Typography textAlign="left" variant="body1">
                  {item.name}
                </Typography>
                <Typography
                  textAlign="left"
                  variant="body2"
                  color="text.secondary"
                >
                  {`${BRLFormat.format(item.price * item.quantity)}`}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => handleDecrement(item.id)}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1" component="span" mx={1}>
                  {item.quantity}
                </Typography>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => handleIncrement(item.id)}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => handleRemove(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
          <Box mt={2}>
            <Typography textAlign="left" variant="body1" gutterBottom>
              Total: {BRLFormat.format(calculateTotal())}
            </Typography>
          </Box>
          {/* ... add checkout and other related functionality ... */}

          <Box display="flex" flexDirection={"row"}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleClear()}
            >
              Limpar Carrinho
            </Button>
            <Button
            mt={2}
              variant="contained"
              color="success"
              onClick={() => handleCheckout()}
            >
              Finalizar Compra
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CheckoutPage;
