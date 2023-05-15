import React, { Suspense } from "react";
import { useSession } from "next-auth/react";
import Podcast from "@/components/admin_render";
import Layout from "@/components/layout";
import {
  Button,
  Flex,
  Spinner,
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
      <Suspense
        fallback={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      >
        <Podcast />
      </Suspense>
    );
  }
  return (
    <Suspense
      fallback={
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      }
    >
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
    </Suspense>
  );
}
