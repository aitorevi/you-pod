import React from "react";
import {Button, Container, Stack, useColorModeValue} from "@chakra-ui/react";
import {Heading} from '@chakra-ui/react'
import {UpdateModal} from "./crud/modals/updatePodcastModal";

export type MyPodcastProps = {
    readPodcast: any;
    url: string;
    title: string;
    description: string;
    deletePodcast: any;
    id: any;
}
export const AdminPanel:
    React.FunctionComponent<MyPodcastProps> = ({
                                                   id,
                                                   url,
                                                   title,
                                                   description,
                                                   deletePodcast,
                                                   readPodcast
                                               }) => {
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
                    <Heading as='h2' size='sm'>{title}</Heading>
                </Stack>
                <Container
                    as={Stack}
                    justify={{base: 'right', md: 'right'}}
                    direction={{base: 'column', md: 'row'}}
                    maxW={{base: 350, md: 50}}
                >
                    <Stack
                        minW='75px'>
                        <UpdateModal
                            readPodcast={readPodcast}
                            id={id}
                            oldTitle={title}
                            oldDescription={description}
                            oldUrl={url}
                        />
                    </Stack>
                    <Stack
                        minW='75px'>
                        <Button
                            onClick={() => {
                                deletePodcast(id)
                            }}
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