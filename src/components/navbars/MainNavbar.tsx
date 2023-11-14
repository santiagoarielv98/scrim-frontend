import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import SecurityIcon from "@mui/icons-material/Security";
import { LuSwords } from "react-icons/lu";

const MainNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "primary.lighter" }}>
        <Toolbar>
          <SecurityIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Scrim Station
          </Typography>
          <Button color="error" variant="contained" startIcon={<LuSwords />}>
            Create Scrim
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainNavbar;
