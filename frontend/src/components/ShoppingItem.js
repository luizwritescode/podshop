import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Icon,
  SvgIcon
} from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';

import { addToCart, removeFromCart } from "../reducers/cartReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";	

const ShoppingItem = ({ item }) => {
  const [selected, setSelected] = React.useState( useSelector((state) => state.cart.cartItems.filter((cartItem) => cartItem.id === item.id).length > 0));

  const dispatch = useDispatch();
  const CheckBadge = () => {
    if (selected) {
      return (<div className="check-icon">
       <SvgIcon component={CheckIcon} />
      </div>
      );
    }
  };

  const handleClick = () => {

    setSelected(!selected);

    if (selected) {
        dispatch(removeFromCart(item.id))
    } else {
        dispatch(addToCart(item))
    }
  };

  return (
    <div onClick={ () => handleClick() } style={{borderRadius: "10px",border:selected?"5px solid dodgerblue": ""}}>

    <Card>
    <CardActionArea>
        <CheckBadge/>
    <CardMedia
    component="img"
          height="140"
          image={item.imageSrc}
          alt={item.name}
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};

export default ShoppingItem;
