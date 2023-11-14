import type { PaletteOptions } from "@mui/material/styles";
import { ThemeMode } from "../config/theme";

export const primary = {
  lighter: "#2C3E50", // Un azul más claro que el principal
  light: "#34495E", // Azul claro
  main: "#1A202C", // Azul Oscuro
  dark: "#17202A", // Azul más oscuro
  darker: "#0B1622", // Un azul aún más oscuro
  contrastText: "#fff", // Texto blanco para contraste
};

export const secondary = {
  lighter: "#F1948A", // Rojo más claro
  light: "#EC7063", // Rojo claro
  main: "#E53E3E", // Rojo Vivo
  dark: "#CB4335", // Rojo oscuro
  darker: "#B03A2E", // Rojo aún más oscuro
  contrastText: "#fff", // Texto blanco para contraste
};

export const error = {
  lighter: "#EDBB99", // Amarillo más claro
  light: "#DC7633", // Amarillo claro
  main: "#D69E2E", // Amarillo Dorado
  dark: "#BA4A00", // Amarillo oscuro
  darker: "#A04000", // Amarillo aún más oscuro
  contrastText: "#000", // Texto negro para contraste
};

export const warning = {
  lighter: "#52BE80", // Verde más claro
  light: "#48C9B0", // Verde claro
  main: "#38A169", // Verde Esmeralda
  dark: "#27AE60", // Verde oscuro
  darker: "#1E8449", // Verde aún más oscuro
  contrastText: "#000", // Texto negro para contraste
};

export const info = {
  lighter: "#85C1E9", // Azul cielo más claro
  light: "#5DADE2", // Azul cielo claro
  main: "#63B3ED", // Azul Cielo
  dark: "#3498DB", // Azul cielo oscuro
  darker: "#2E86C1", // Azul cielo aún más oscuro
  contrastText: "#000", // Texto negro para contraste
};

export const success = {
  lighter: "#ABEBC6", // Verde claro (éxito)
  light: "#82E0AA", // Verde más claro (éxito)
  main: "#38A169", // Verde Esmeralda (éxito)
  dark: "#28B463", // Verde oscuro (éxito)
  darker: "#239B56", // Verde aún más oscuro (éxito)
  contrastText: "#000", // Texto negro para contraste
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
