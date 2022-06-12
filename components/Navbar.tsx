import NextLink from "next/link";
import { Flex, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justifyContent="space-around" p={20}>
      <Button>
        <NextLink href="/">Home</NextLink>
      </Button>
      <Button>
        <NextLink href="/profile">Profile</NextLink>
      </Button>
      <Button>
        <NextLink href="/auth">Auth</NextLink>
      </Button>
    </Flex>
  );
};

export default Navbar;
