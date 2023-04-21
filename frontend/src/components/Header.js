import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Badge, useMediaQuery  } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from '@mui/icons-material/Menu';

import { useSelector } from "react-redux";	

const Header = () => {

    const cartAmount = useSelector((state) => state.cart.cartItems.length)

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="sticky">
      <Toolbar>
      <IconButton display={isMobile?'flex':'none'} component={Link} to="" color="inherit">
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="white"  className="header-logo" sx={{ flexGrow: 1, textAlign: isMobile ? 'center' : 'left' }}  component={Link} to="/">
          PodShop
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton component={Link} to="/carrinho" color="inherit">
          <Badge badgeContent={cartAmount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
