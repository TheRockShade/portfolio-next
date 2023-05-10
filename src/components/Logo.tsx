import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const { asPath } = useRouter();

  const Container =
    asPath !== "/"
      ? styled(Link)({
          color: "#fff",
          textDecoration: "none",
        })
      : "div";

  return (
		// TODO: пофиксить href
    <Container href='/'>
      <Typography variant="h6" component="h1">
        Portfolio
      </Typography>
    </Container>
  );
};

export default Logo;
