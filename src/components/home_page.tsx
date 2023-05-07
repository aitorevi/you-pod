import {Box, Center, Flex, Img, Text, useBreakpointValue, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import styles from "@/styles/Home.module.css";

const HomePage = () => {
    return (
        <>
            <Box
                bg={useColorModeValue('gray.50', 'gray.800')}
            >
                <Flex
                    minW='100%'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Img
                        src="/you-pod-logo.svg"
                        alt="Logo"
                        width={useBreakpointValue({base: '80px', md: '120px'})}
                        height={useBreakpointValue({base: '80px', md: '120px'})}
                        borderRadius={useBreakpointValue({base: 16, md: 28})}
                        marginTop='12'
                        marginLeft={8}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.200'
                    />
                </Flex>
                <Center
                    marginLeft={8}
                >
                    <Text
                        className={styles.homePageText}
                        fontSize={useBreakpointValue({base: '3xl', md: '6xl'})}
                        //fontSize='6xl'
                        maxW='900px'
                        as='b'
                        fontFamily='SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'
                        textAlign='center'
                        textShadow='1px 1px 1px #000000' m='6'
                    >Una forma única de escuchar tus programas favoritos.</Text>
                </Center>
                <Flex
                    justifyContent='center'
                    alignItems='center'
                    marginLeft='-100px'
                    marginRight='-100px'
                >
                    <Img
                        src="/glass.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        margin={8}
                        marginTop={useBreakpointValue({base: -72, md: '-350px'})}
                        marginRight={0}
                        marginBottom={8}
                        marginLeft={8}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/audio.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        marginTop={useBreakpointValue({base: -72, md: '340px'})}
                        marginRight={0}
                        marginBottom={8}
                        marginLeft={'-300px'}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/eggs.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        margin={8}
                        marginTop={useBreakpointValue({base: -72, md: '-450px'})}
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={16}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/ivan.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        marginTop='240px'
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={'-332px'}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/apple.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 20, md: 300})}
                        height={useBreakpointValue({base:20, md: 300})}
                        borderRadius={8}
                        margin={8}
                        marginTop={useBreakpointValue({base: -52, md: '-350px'})}
                        marginRight={useBreakpointValue({base: '-190px', md: 8})}
                        marginBottom={8}
                        marginLeft={useBreakpointValue({base: 72, md: 8})}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/grey.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 0, md: 300})}
                        height={useBreakpointValue({base: 0, md: 300})}
                        borderRadius={8}
                        marginTop={useBreakpointValue({base: 52, md: '340px'})}
                        marginRight={useBreakpointValue({base: 2, md: 8})}
                        marginLeft={useBreakpointValue({base: '42px', md: '-333px'})}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/pink.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        margin={8}
                        marginTop={useBreakpointValue({base: -72, md: '-450px'})}
                        marginRight={32}
                        marginBottom={8}
                        marginLeft={8}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/modern.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        marginTop={useBreakpointValue({base: 40, md: '240px'})}
                        marginRight={-6}
                        marginBottom={8}
                        marginLeft={useBreakpointValue({base: '-328px', md: '-425px'})}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/hero_iphone.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 400, md: 600})}
                        borderRadius={8}
                        marginTop={8}
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={8}
                    />
                    <Img
                        src="/red.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        margin={8}
                        marginTop={useBreakpointValue({base: -72, md: '-450px'})}
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={useBreakpointValue({base: -36, md: -52})}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/ia.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        marginTop={useBreakpointValue({base: 40, md: '240px'})}
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={useBreakpointValue({base: '-233px', md: '-330px'})}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/beep.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        margin={8}
                        marginTop={useBreakpointValue({base: -300, md: '-350px'})}
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={useBreakpointValue({base: '10px', md: 8})}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/cd.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        marginTop={useBreakpointValue({base: 150, md: '340px'})}
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={useBreakpointValue({base: -230, md: '-333px'})}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/bike.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        margin={8}
                        marginTop='-450px'
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={8}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/cat.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        marginTop='240px'
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={'-333px'}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/blue.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        margin={8}
                        marginTop='-350px'
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={8}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                    <Img
                        src="/orange.png"
                        alt="Logo"
                        width={useBreakpointValue({base: 200, md: 300})}
                        height={useBreakpointValue({base: 200, md: 300})}
                        borderRadius={8}
                        marginTop='340px'
                        marginRight={8}
                        marginBottom={8}
                        marginLeft={'-333px'}
                        shadow={"2xl"}
                        border='1px'
                        borderColor='gray.400'
                    />
                </Flex>
                <Center
                    marginLeft={8}
                    marginTop={-28}
                    paddingBottom={10}
                >
                    <Text
                        className={styles.homePageText}
                        fontSize={useBreakpointValue({base: '3xl', md: '6xl'})}
                        maxW='900px'
                        as='b'
                        fontFamily='SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'
                        textAlign='center'
                        textShadow='1px 1px 1px #000000' m='6'
                    >Historias que van contigo a todas partes.</Text>
                </Center>
            </Box>
        </>
    )
}
export default HomePage;