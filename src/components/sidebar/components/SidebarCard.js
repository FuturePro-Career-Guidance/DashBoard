import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logoWhite from "assets/img/layout/logoWhite.png";
import React from "react";

export default function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #D2FBF1 0%, #32DBD1 100%)";
  const borderColor = useColorModeValue("white", "navy.800");

  return (
    <Flex
    justify='center'
      direction='column'
      align='center'
      height={10}
      bg={bgColor}
      borderRadius='30px'
      position='relative'
    >
      <a href="views/admin/profile">
        <button class="btn btn-primary">Profile</button>
      </a>

      
    </Flex>
  );
}


// return (
//   <Flex
//     justify='center'
//     direction='column'
//     align='center'
//     bg={bgColor}
//     borderRadius='30px'
//     position='relative'>
//     <Flex
//       border='5px solid'
//       borderColor={borderColor}
//       bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
//       borderRadius='50%'
//       w='94px'
//       h='10px'
//       align='center'
//       justify='center'
//       mx='auto'
//       position='absolute'
//       left='50%'
//       top='-47px'
//       transform='translate(-50%, 0%)'>
//       <Image src={logoWhite} w='40px' h='40px' />
//     </Flex> }
//      <Flex
//       direction='column'
//       mb='12px'
//       align='center'
//       justify='center'
//       px='15px'
//       pt='55px'>
//       <Text
//         fontSize={{ base: "lg", xl: "18px" }}
//         color='white'
//         fontWeight='bold'
//         lineHeight='150%'
//         textAlign='center'
//         px='10px'
//         mt="10px"
//         mb='6px'>
//         Upgrade to PRO
//       </Text>
//       <Text
//         fontSize='14px'
//         color={"white"}
//         fontWeight='500'
//         px='10px'
//         mb='6px'
//         textAlign='center'>
//         Improve your development process and start doing more with Horizon UI
//         PRO!
//       </Text>
//     </Flex>
//     <Link href='https://horizon-ui.com/pro?ref=horizon-chakra-free'>
//       <Button
//         bg='whiteAlpha.300'
//         _hover={{ bg: "whiteAlpha.100" }}
//         _active={{ bg: "whiteAlpha.100" }}
//         color={"black"}
//         fontWeight='regular'
//         fontSize='sm'
//         minW='200px'
//         mx='auto'>
//         Profile
//       </Button>
//     </Link>
//   </Flex>
// );
// }