import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Button = styled((props) => <MuiButton disableRipple disableElevation {...props} />)(({ theme }) => ({}));

export default Button;
