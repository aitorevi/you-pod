import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {signIn} from "next-auth/react";
import Head from "next/head";
import Nav from "@/components/navbar";
import React from "react";
import FooterSimple from "@/components/footer";

export default function SignInPage() {
    return (
        <>
            <Head>
                <title>Podcast</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Nav/>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Aquí letras degradadas</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool <Link color={'purple.600'}>features</Link> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email"/>
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password"/>
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{base: 'column', sm: 'row'}}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Recordar</Checkbox>
                                    <Link color={'purple.600'}>Olvidaste el password?</Link>
                                </Stack>
                                <Button
                                    bg={'purple.500'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'purple.600',
                                    }}>
                                    Ingresar
                                </Button>
                                <Button
                                    bg={'red'}
                                    color={'white'}
                                    onClick={() => signIn()}>
                                    Google
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <footer>
                <FooterSimple/>
            </footer>
        </>
    );
}
