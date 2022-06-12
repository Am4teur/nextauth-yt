import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { Flex, Button, Text, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Heading>Home</Heading>
      {session ? (
        <>
          <Text>
            Signed in as {session?.user?.email} <br />
          </Text>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          <Flex direction="column" alignItems="center" justifyContent="center">
            Not signed in <br />
            <Button onClick={() => signIn()}>Sign in</Button>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Home;
