import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "./logo.svg";
import "./App.css";


import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import Sidebar from "./components/SideBar";
import MobileFilterModal from "./components/MobileFilterModal";
import CheckoutPage from "./components/CheckoutPage";
import CategoryBar from "./components/CategoryBar";
import CategoryHeader from "./components/CategoryHeader";
function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536, // large screens
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
       <div className="App">
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<CheckoutPage />} />
        {/* <Route path="/produto/:id" element={<ProductPage />} /> */}
      </Routes>
       </div>
    </ThemeProvider>
  );
}

function Home() {
 
   return(

    <>
      <CategoryBar />

    <div className="content">
      <Sidebar />
      <MobileFilterModal />
      <ShoppingList />
    </div>
    </>
   )
}
export default App;
