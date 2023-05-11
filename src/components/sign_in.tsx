import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {signIn} from "next-auth/react";
import Head from "next/head";
import React, {useRef} from "react";
import {FaGithub, FaGoogle} from "react-icons/fa";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function SignInPage() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const handleLogin = async () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: true
            });

            console.log('Result = ', result);

            if (!result?.error) {
                console.log(result);
            }
        } catch (error) {
            console.log('Error signing in:', error);
        }
    }

    return (
        <>
            <Head>
                <title>Podcast</title>
                <meta name="página de podcast para profesionales del sector TIC"
                      content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
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
                        <Stack
                            as={'form'}
                            spacing={4}
                            onSubmit={handleLogin}>
                            <FormControl isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type={"email"} id={"email"} ref={emailRef}/>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type={"password"} id={"password"} ref={passwordRef}/>
                            </FormControl>
                            <Image
                                className={styles.logo}
                                src="/you-pod-nav.svg"
                                alt="You-Pod Logo"
                                width={100}
                                height={100}
                                priority
                            />
                            {/*<Stack spacing={6}>*/}
                                {/*<Stack*/}
                                {/*    direction={{base: 'column', sm: 'row'}}*/}
                                {/*    align={'start'}*/}
                                {/*    justify={'space-between'}>*/}
                                {/*    <Checkbox>Recordar</Checkbox>*/}
                                {/*    <Link color={'purple.600'}>Olvidaste el password?</Link>*/}
                                {/*</Stack>*/}
                                <Button
                                    type={"submit"}
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
                                    leftIcon={<FaGoogle/>}
                                    onClick={() => signIn('google')}>
                                    Google
                                </Button>
                                <Button
                                    bg={'gray.800'}
                                    color={'white'}
                                    leftIcon={<FaGithub/>}
                                    onClick={() => signIn('github')}>
                                    GitHub
                                </Button>
                            {/*</Stack>*/}
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}
