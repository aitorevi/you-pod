import React, {useEffect, useState} from "react";
import {Box, Container, Heading, Stack, useColorModeValue} from '@chakra-ui/react'
import {AdminPanel} from "@/components/adminPanel";
import {CreatePodcastModal} from "@/components/crud/modals/createPodcastModal";
import {collection, deleteDoc, doc, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "@/firebase/firebase";
import Layout from "@/components/layout";

export default function Podcast() {
    const [podcastList, setPodcastList] = useState<any[]>([]);
    const ReadPodcastInDB = async () => {
        return await getDocs(query(collection(db, "podcast"), orderBy("createAt", "desc")));
    }
    const DeletePodcastInDB = async (id: string) => {
        {
            await deleteDoc(doc(db, "podcast", id));
            await readPodcast();
        }
    }
    const deletePodcast = async (id: string) => {
        await DeletePodcastInDB(id)
    }
    useEffect(() => {
        readPodcast().then(r => r);
    },)
    const readPodcast = async () => {
        const podcasts = await ReadPodcastInDB();
        setPodcastList(podcasts.docs);
    }
    return (

        <>
            <Layout props={''}>
                <Container maxW='5xl'>
                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        minH={'100vh'}
                        py={2}
                        px={2}
                    >
                        <Stack>
                            <Container
                                as={Stack}
                                maxW={'6xl'}
                                marginTop='0.5rem'
                                direction={{base: 'column', md: 'row'}}
                                spacing={{base: 4, md: 10}}
                                justify={{base: 'center', md: 'center'}}
                                bg={useColorModeValue('gray.200', 'gray.800')}
                                color={'gray.700'}
                                borderRadius={6}>
                                <Heading
                                    size='xl'>
                                    Panel de control
                                </Heading>
                            </Container>
                            <Container
                                as={Stack}
                                maxW={'6xl'}
                                marginTop='0.5rem'
                                paddingY={2}
                                direction={{base: 'column', md: 'row'}}
                                spacing={{base: 4, md: 10}}
                                justify={{base: 'space-between', md: 'space-between'}}
                                align={{base: 'start', md: 'start'}}
                                bg={useColorModeValue('gray.50', 'gray.800')}
                                borderRadius={6}>
                                <CreatePodcastModal
                                    readPodcast={readPodcast}/>
                            </Container>
                            {
                                podcastList && podcastList.map(podcast => {
                                    return (
                                        <AdminPanel readPodcast={readPodcast}
                                                    deletePodcast={deletePodcast}
                                                    key={podcast.id}
                                                    id={podcast.id}
                                                    url={podcast.data().url}
                                                    title={podcast.data().title}
                                                    description={podcast.data().description}/>
                                    )
                                })
                            }
                        </Stack>
                    </Box>
                </Container>
            </Layout>
        </>
    )
}