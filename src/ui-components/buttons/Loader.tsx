import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const LoaderWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  [theme.breakpoints.up("sm")]: {
    top: 64,
  },
  [theme.breakpoints.down("sm")]: {
    top: 56,
  },
  left: 0,
  zIndex: 1301,
  width: "100%",
}));

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

export default Loader;
