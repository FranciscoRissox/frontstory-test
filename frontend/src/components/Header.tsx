import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      paddingY={4}
      paddingX={8}
      bg="gray.800"
      color="white"
      boxShadow="sm"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      h={10}
    >
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        CampaignManager
      </Heading>
      <Spacer />
      
    </Flex>
  );
};

export default Header;