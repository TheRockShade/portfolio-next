import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

interface BasicLayoutProps {
  children: JSX.Element;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  const isMenuOpen = useSelector((state: RootState) => state.global.isMenuOpen);

  return (
    <>
      <Header />
      {children}
      {<MobileMenu isOpen={isMenuOpen} />}
    </>
  );
};

export default BasicLayout;
