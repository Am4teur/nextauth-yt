import type { NextPage } from "next";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const Auth: NextPage = ({ providers }: any) => {
  const { data: session } = useSession();

  const ProvidersButtons = ({ providers }: any) => (
    <>
      {Object.values(providers).map(
        (provider: any) =>
          provider.name !== "Credentials" && (
            <Button
              key={provider.name}
              type="submit"
              onClick={() => {
                signIn(provider.id, {
                  callbackUrl: `http://localhost:3000/`,
                });
              }}
            >
              Sign in with {provider.name}
            </Button>
          )
      )}
    </>
  );

  return (
    <Flex direction="column" alignItems="center">
      <Heading>Auth</Heading>
      {session ? (
        <>
          <Text>Signed in as {session?.user?.email}</Text>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          <Text>Not signed in</Text>
          <ProvidersButtons providers={providers} />
        </>
      )}
    </Flex>
  );
};

export default Auth;

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}
