import React, { useRef } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";


const CategoryBar = ({ categories, onCategoryChange }) => {
  categories = ["Ignite", "Elfbar"];
  // Create a ref for the select element
  const selectRef = useRef(null);

  const [value, setValue] = React.useState("Ignite");

  // Handle category change
  const handleCategoryChange = (e) => {
    // Get the selected category from the select element
    const selectedCategory = e.target.value;
    

    
    if (selectedCategory) {
        setValue(selectedCategory)
        
        const categoryHeader = document.getElementById(selectedCategory);
      
        if(window.scrollY < categoryHeader.offsetTop)

            window.scrollBy({
                top: categoryHeader.offsetTop - window.scrollY - 150,
                behavior: "smooth",
            })

        else if(window.scrollY > categoryHeader.offsetTop + categoryHeader.offsetHeight)
        {
            window.scrollBy({
                top: categoryHeader.offsetTop + categoryHeader.offsetHeight - window.scrollY - 300,
                behavior: "smooth",
            })
        }

      }

  };

  return (
    <Box
      sx={{
        zIndex: 100,
        width: "100%",
        backgroundColor: "#eee",
        display: "flex",
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label=""
        ref={selectRef}
        onChange={(e) => handleCategoryChange(e)}
        id="category-select"
        sx={{ color: "#333", width: "300px", margin: "8px", bgcolor: "#fff", borderRadius: "4px"}}
        value={value}
        select
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default CategoryBar;
