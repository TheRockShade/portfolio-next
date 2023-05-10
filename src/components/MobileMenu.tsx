import menuLinks, { MenuLinksTypes } from "@/data/menuLinks";
import { toggleMenu } from "@/redux/slices/globalSlice";
import { Drawer, MenuItem, MenuList } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const Menu = styled(MenuList)({
    textAlign: "center",
  }) as typeof MenuList;

  const Link = styled(NextLink)({
    color: "#fff",
    textDecoration: "none",
    width: "100%",
  }) as typeof NextLink;

  const { asPath } = useRouter();
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onBackdropClick={() => dispatch(toggleMenu())}
    >
      <Menu>
        {menuLinks.map((link: MenuLinksTypes) => (
          <MenuItem
            key={link.id}
            autoFocus={link.id === 1}
            selected={asPath === link.href}
            disabled={asPath === link.href}
            onClick={() => dispatch(toggleMenu())}
          >
            <Link href={link.href}>{link.title}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Drawer>
  );
};

export default MobileMenu;
