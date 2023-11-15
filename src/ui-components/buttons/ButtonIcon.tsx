import MuiButton, { ButtonProps } from "@mui/material/Button";
import MuiTooltip from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";

const Tooltip = styled(MuiTooltip)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    "& + .MuiTooltip-popper": {
      display: "none !important",
    },
  },
}));

const ButtonIcon = styled(({ children, ...rest }: ButtonProps) => (
  <Tooltip
    title={children}
    placement="bottom"
    arrow
    PopperProps={{
      disablePortal: true,
    }}
  >
    <MuiButton disableRipple disableElevation {...rest}>
      <span className="text">{children}</span>
    </MuiButton>
  </Tooltip>
))(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    minWidth: 32,
    padding: "6px",
  },
  "& .MuiButton-startIcon, & .MuiButton-endIcon": {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  "& .text": {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default ButtonIcon;
