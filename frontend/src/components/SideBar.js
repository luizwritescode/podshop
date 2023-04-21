import React from 'react';
import { Grid, TextField, Slider, RadioGroup, FormControlLabel, Box, Typography, FormGroup, Checkbox, useMediaQuery } from '@mui/material';

import '@fontsource/roboto'

const Sidebar = () => {

    const  isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  // State for price range slider value
  const [priceRange, setPriceRange] = React.useState([0, 100]);

  // State for selected flavor
  const [selectedFlavor, setSelectedFlavor] = React.useState('');
  const [selectedBrand, setSelectedBrand] = React.useState('');

  // Handler for price range slider value change
  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Handler for flavor selection change
  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
  };
  const handleBrandChange = (event) => {
    setSelectedFlavor(event.target.value);
  };

  return (

    <Box px={4} display={isMobile ? 'none' : 'flex'} flexDirection="column" justifyContent="space-between" height="100%">
      <Typography variant="h6" fontFamily="Roboto">Busca</Typography>
      <Box mt={2}>
        <TextField fullWidth label="" variant="outlined" />
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">Preço</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
          min={0}
          max={500}
        />
      </Box>
      <Box mt={2}>
        <Typography variant="h6" fontFamily="Roboto">Marca</Typography>
        <FormGroup
          value={selectedBrand}
          onChange={handleBrandChange}
          aria-label="flavor"
          name="flavor"
          >
          <FormControlLabel value="ignite" control={<Checkbox />} label="Ignite" />
          <FormControlLabel value="elfbar" control={<Checkbox />} label="Elfbar" />
          <FormControlLabel value="maskking" control={<Checkbox />} label="Maskking" />
        </FormGroup>
      </Box>

      <Box mt={2}>
        <Typography variant="h6">Sabor</Typography>
        <FormGroup
          value={selectedFlavor}
          onChange={handleFlavorChange}
          aria-label="flavor"
          name="flavor"
        >
          <FormControlLabel value="chocolate" control={<Checkbox />} label="Chocolate" />
          <FormControlLabel value="vanilla" control={<Checkbox />} label="Vanilla" />
          <FormControlLabel value="strawberry" control={<Checkbox />} label="Strawberry" />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Sidebar;
