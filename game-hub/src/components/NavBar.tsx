import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <p>Nav Bar</p>
    </HStack>
  );
}

export default NavBar;
