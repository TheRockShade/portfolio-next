import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "@/redux/slices/globalSlice";
import { RootState } from "@/redux/store";

const Header = () => {
  const dispath = useDispatch();
  const isMenuOpen = useSelector((store: RootState) => store.global.isMenuOpen);

  return (
    <AppBar position="static" sx={{ mb: "10px" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo />
        <IconButton
          color="inherit"
          aria-label="menu"
          sx={{ p: 0 }}
          onClick={() => dispath(toggleMenu())}
        >	
					{/* TODO: Доделать крестик */}
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
