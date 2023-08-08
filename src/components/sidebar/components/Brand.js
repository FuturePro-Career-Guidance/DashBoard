import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components

import { HSeparator } from "components/separator/Separator";
import LogoImage from "assets/img/auth/logo.png";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column' mt='0px'>
       <img src={LogoImage} alt="Logo" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
