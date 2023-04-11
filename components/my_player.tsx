import React from "react";
import {Container, Grid, Stack} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import {Text} from '@chakra-ui/react'
import {Heading} from '@chakra-ui/react'

type MyPlayerProps = {
    url: string;
    title: string;
    description: string;
}
export const MyPlayer: React.FunctionComponent<MyPlayerProps> = ({url, title, description}) => {
    return (
        <>
            <Container
                as={Stack}
                maxW={'4xl'}
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
                            width={230}
                            height={36}
                            priority
                        />
                    </div>
                </Stack>
                <Stack>
                    <Heading as='h3' size='lg'>{title}</Heading>
                    <Text
                        noOfLines={[1, 2, 3]}
                        display={{base: "none", md: "inline"}}>
                        {description}
                    </Text>
                    <Grid
                        justifyContent={{base: 'center', md: 'center'}}>
                        <audio controls>
                            <source src={url} type="audio/mpeg"/>
                        </audio>
                    </Grid>
                </Stack>
            </Container>
        </>
    )
}