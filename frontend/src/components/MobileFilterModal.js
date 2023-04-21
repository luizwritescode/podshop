import React, { useState } from "react";
import {
  Box,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
  Slider,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const MobileFilterModal = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // State for price range slider value
  const [priceRange, setPriceRange] = React.useState([0, 100]);

  // State for selected flavor
  const [selectedFlavor, setSelectedFlavor] = React.useState("");
  const [selectedBrand, setSelectedBrand] = React.useState("");

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Button to open modal */}
      {isMobile && (
        <IconButton
          sx={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            bgcolor: "primary.main",
            color: "white",
            zIndex: 9999,
          }}
          onClick={handleOpen}
        >
          <SearchIcon />
        </IconButton>
      )}

      {/* Modal */}
      <Modal sx={{ margin: 2 }} open={open} onClose={handleClose}>
          {/* Modal content */}
          <Box
            px={4}
            display={isMobile ? "none" : "flex"}
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Typography variant="h6" fontFamily="Roboto">
              Busca
            </Typography>
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
              <Typography variant="h6" fontFamily="Roboto">
                Marca
              </Typography>
              <FormGroup
                value={selectedBrand}
                onChange={handleBrandChange}
                aria-label="flavor"
                name="flavor"
              >
                <FormControlLabel
                  value="ignite"
                  control={<Checkbox />}
                  label="Ignite"
                />
                <FormControlLabel
                  value="elfbar"
                  control={<Checkbox />}
                  label="Elfbar"
                />
                <FormControlLabel
                  value="maskking"
                  control={<Checkbox />}
                  label="Maskking"
                />
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
                <FormControlLabel
                  value="chocolate"
                  control={<Checkbox />}
                  label="Chocolate"
                />
                <FormControlLabel
                  value="vanilla"
                  control={<Checkbox />}
                  label="Vanilla"
                />
                <FormControlLabel
                  value="strawberry"
                  control={<Checkbox />}
                  label="Strawberry"
                />
              </FormGroup>
            </Box>
          </Box>
          {/* ... add your filter components here ... */}
      </Modal>
    </>
  );
};

export default MobileFilterModal;
