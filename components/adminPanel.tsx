import React from "react";
import {useState, useEffect} from "react";
import {Button, Container, Stack, useColorModeValue} from "@chakra-ui/react";
import {Heading} from '@chakra-ui/react'
import {UpdatePodcastInDB} from "./crudPodcast";

type MyPodcastProps = {
    url: string;
    title: string;
    description: string;
    deletePodcast: any;
}
export const AdminPanel: React.FunctionComponent<MyPodcastProps> = ({url, title, description, deletePodcast}) => {

    // const [podcastList, setPodcastList] = useState("");
    //
    // useEffect(() =>  {
    //     readPodcast();
    // },[])
    // const readPodcast = async () => {
    //     const podcasts = await ReadPodcastInDB();
    //     console.log(podcasts.docs[0].data());
    //     setPodcastList(podcasts);
    // }

    const id: string = title;
    return (
        <>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={1}
                direction={{base: 'column', md: 'row'}}
                spacing={{base: 4, md: 10}}
                justify={{base: 'space-between', md: 'space-between'}}
                align={{base: 'center', md: 'center'}}
                bg={useColorModeValue('gray.50', 'gray.800')}
                borderRadius={6}
                id={title}>
                <Stack>
                    <Heading as='h2' size='sm' >{title}</Heading>
                </Stack>
                <Container
                    as={Stack}
                    justify={{base: 'right', md: 'right'}}
                    direction={{base: 'column', md: 'row'}}
                    maxW={{base: 350, md: 50}}

                >
                    <Stack
                        minW='75px'>
                        <Button
                            onClick={() => {UpdatePodcastInDB(id)}}
                            bg={useColorModeValue('orange.300', 'orange.400')}
                            _hover={{
                                bg: 'orange.500',
                            }}>
                            Editar
                        </Button>
                    </Stack>
                    <Stack
                        minW='75px'>
                        <Button
                            onClick={() => {deletePodcast(id)}}
                            bg={useColorModeValue('red.300', 'red.400')}
                            _hover={{
                                bg: 'red.500',
                            }}>
                            Eliminar
                        </Button>
                    </Stack>
                </Container>
            </Container>
        </>
    )
}