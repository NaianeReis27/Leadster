import { Container } from "./styles";
import Image from "next/image";

const Footer = () => {
  return (
    <Container>
      <Image width={192} height={42} src="images/logo.svg" alt="logo leadster" />
    </Container>
  );
};

export default Footer;
