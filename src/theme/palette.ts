import type { PaletteOptions } from "@mui/material/styles";
import { ThemeMode } from "../config/theme";

export const primary = {
  main: "#1A202C", // Azul Oscuro
  contrastText: "#fff", // Texto blanco para contraste
};

export const secondary = {
  main: "#E53E3E", // Rojo Vivo
  contrastText: "#fff", // Texto blanco para contraste
};

export const error = {
  main: "#D69E2E", // Amarillo Dorado
};

export const warning = {
  main: "#38A169", // Verde Esmeralda
};

export const info = {
  main: "#63B3ED", // Azul Cielo
};

export const success = {
  main: "#38A169", // Verde Esmeralda (también se puede usar para el éxito)
};

export const background = {
  default: "#f4f5f7", // Un gris claro para el fondo, puedes ajustarlo
};

export const text = {
  primary: "#1A202C", // Azul Oscuro para texto principal
  secondary: "#A0AEC0", // Gris Neutro para texto secundario
};

const base = {
  primary,
  secondary,
  error,
  warning,
  info,
  success,
  background,
  text,
};

export const palette = (): PaletteOptions => ({
  ...base,
  mode: ThemeMode.LIGHT,
});
