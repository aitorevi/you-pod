import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import React, {ReactNode} from 'react';
import {FaInstagram, FaLinkedinIn, FaMedium, FaNewspaper, FaRegNewspaper, FaTwitter, FaYoutube} from "react-icons/fa";

const SocialButton = ({
                          children,
                          label,
                          href,
                      }: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};
export default function SmallWithNavigation() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{base: 'column', md: 'row'}}
                spacing={4}
                justify={{base: 'center', md: 'space-between'}}
                align={{base: 'center', md: 'center'}}>
                <Stack direction={'row'} spacing={6}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'about'}>About</Link>
                    <Link href={'newsletter'}>Newsletter</Link>
                </Stack>
                <Text>© 2023 You-Pod. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'LinkedIn'} href={'https://linkedin.com/in/aitor-reviriego-amor'}>
                        <FaLinkedinIn />
                    </SocialButton>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/aitorevi'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'Medium'} href={'https://medium.com/@aitorevi'}>
                        <FaMedium />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}