import Box from "@mui/material/Box";

import { Outlet } from "react-router-dom";
import MainNavbar from "../../components/navbars/MainNavbar";

const MainLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "primary.main",
      }}
    >
      <MainNavbar />
      <Outlet />
    </Box>
  );
};

export default MainLayout;
