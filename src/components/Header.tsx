"use client";
import {
  Box,
  Flex,
  Button,
  Spacer,
  Image,
  Link,
  Text,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import NextLink from "next/link";
import LoginForm from "./LoginForm";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex alignItems="center">
        {" "}
        <Image
          src="/LeetCode_logo.png"
          alt="Company Logo"
          boxSize="50px"
          mr={4}
        />
        {/* <Text fontSize="xl" fontWeight="bold">
          Leetcode
        </Text> */}
        <Spacer />
        <Flex alignItems="center">
          <NextLink href="/" passHref>
            <Link mr={4}>Home</Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Link>About Us</Link>
          </NextLink>
          <NextLink href="/signup" passHref>
            <Link ml={4}>Contact</Link>
          </NextLink>
        </Flex>
        <Button ml={4} colorScheme="teal" variant="ghost" onClick={onOpen}>
          Login
        </Button>
        <Button ml={2} colorScheme="teal" variant="outline">
          Signup
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Leetcode</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            <LoginForm />
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button> */}
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
