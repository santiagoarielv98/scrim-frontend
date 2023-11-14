import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { TbPlugConnected } from "react-icons/tb";
import { BiJoystick } from "react-icons/bi";
import { PiHandCoinsFill } from "react-icons/pi";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
  textAlign: "center",
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "primary.darker",
        color: "common.white",
      }}
    >
      <Container sx={{ my: 5, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <BiJoystick size={75} />
              <Typography variant="h6" sx={{ my: 3 }}>
                Organiza Tus Scrims
              </Typography>
              <Typography variant="body1">
                Facilitamos la creación y gestión de scrims competitivos. Con solo unos clics, puedes organizar
                partidas, establecer reglas y horarios, e invitar a jugadores.
                {/*  Nuestra plataforma es el lugar ideal para
                aficionados y profesionales por igual. */}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <PiHandCoinsFill size={75} />
              <Typography variant="h6" sx={{ my: 3 }}>
                Apoya a tus Equipos
              </Typography>
              <Typography variant="body1">
                Con nuestro sistema de donaciones integrado, apoyar a tus equipos y jugadores favoritos es más fácil que
                nunca.{" "}
                {/* Realiza donaciones directamente a través de la plataforma para mostrar tu apoyo y ayudar a que la
                comunidad de gaming siga creciendo. */}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <TbPlugConnected size={75} />
              <Typography variant="h6" sx={{ my: 3 }}>
                Conecta con tus Juegos Favoritos
              </Typography>
              <Typography variant="body1">
                Nuestra plataforma está integrada con los juegos más populares, incluyendo Valorant, Counter-Strike,
                Dota 2, League of Legends y Rocket League.
                {/*  Disfruta de una experiencia de juego fluida con estadísticas
                en tiempo real y actualizaciones directamente en tu perfil. */}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
