import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// image
import mainHero from "../../../assets/hero/hero-2.png";

const MainHero = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        px: 4,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          color: "white",
          maxWidth: 600,
        }}
      >
        <Typography variant="h4" textTransform="uppercase">
          Gaming
        </Typography>
        <Typography mb={2} variant="h1" textTransform="uppercase">
          Scrim
        </Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, a nobis ipsum iste culpa quas doloremque
          inventore debitis? Pariatur consequuntur ullam nisi veniam ut quibusdam nobis consequatur tempore commodi
          iste?
        </Typography>
        {/* buttons */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 2,
          }}
        >
          <Button variant="contained" color="error" size="large">
            Get Started
          </Button>
          <Button variant="contained" color="info" size="large">
            Learn More
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          filter: "brightness(0.4) blur(1px)",
          zIndex: -1,
          backgroundImage: `url(${mainHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
    </Box>
  );
};

export default MainHero;
