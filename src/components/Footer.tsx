import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="blue.500" p={4} color="white" width="100%">
      <Flex alignItems="center">
        <Text>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
        <Box flex="1" />
        <Link href="/privacy-policy" mr={4}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </Flex>
    </Box>
  );
};

export default Footer;
