import MuiButton, { ButtonProps } from "@mui/material/Button";

import { styled } from "@mui/material/styles";

const IconButton = styled((props: ButtonProps) => (
  <MuiButton variant="contained" disableRipple={false} centerRipple {...props} />
))({
  minWidth: 0,
  padding: 8,
  overflow: "hidden",
  "& .MuiTouchRipple-root": {
    margin: -8,
  },
});

export default IconButton;
