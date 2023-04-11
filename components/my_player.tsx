import React from "react";
import {Box, Container, Stack} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

type MyPlayerProps = {
    url: string;
}
export const MyPlayer: React.FunctionComponent<MyPlayerProps> = ({url}) => {
    return (
        <>
            <Box>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{base: 'column', md: 'row'}}
                    spacing={{base: 4, md: 10}}
                    justify={{base: 'center', md: 'center'}}
                    align={{base: 'center', md: 'center'}}>
                    <Stack>
                        <div className={styles.youpod}>
                            <Image
                                src="/defaultImage.svg"
                                alt="Logo"
                                width={180}
                                height={36}
                                priority
                            />
                        </div>
                    </Stack>
                    <Stack>
                        <div>
                            <audio controls>
                                <source src={ url }/>
                            </audio>
                        </div>
                    </Stack>
                </Container>
            </Box>









        </>)
}