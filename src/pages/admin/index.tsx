import React from "react";
import { useSession } from "next-auth/react";
import Podcast from "@/components/admin_render";
import Layout from "@/components/layout";
import {
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function PodcastRender() {
  const { status, data: session } = useSession({ required: true });
  if (
    status === "authenticated" &&
    session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL
  ) {
    return (
        <Podcast />
    );
  }
  return (
      <Layout props={""}>
        <Flex
          minH={"100vh"}
          p={8}
          flex={1}
          flexDirection="column"
          align={"center"}
          justify={"center"}
        >
          <Text fontSize={"xl"}>❌ Acceso denegado</Text>

          <Button
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue("purple.400", "purple.300")}
            _hover={{
              bg: "purple.500",
            }}
            mt={"12"}
          >
            <Link href="/">Volver a la página principal</Link>
          </Button>
        </Flex>
      </Layout>
  );
}
