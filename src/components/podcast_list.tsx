import React from "react";
import {Podcast} from "@/components/podcast";
import {Box, useColorModeValue} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "@/firebase/firebase";

export default function Podcast_list() {
    interface PodcastData {
        url: string;
        description: string;
        title: string;
    }

    const [podcastCollection, setPodcastCollection] = useState<PodcastData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const dataSnapshot = await getDocs(query(collection(db, "podcast"), orderBy("createAt", "desc")));
            const podcastData = dataSnapshot.docs.map((doc) => doc.data() as PodcastData);
            await setPodcastCollection(podcastData);
        };
        fetchData().then(r => r);
    }, []);

    return (
        <>
            <Box
                bg={useColorModeValue('gray.50', 'gray.800')}
                minH={'100vh'}>
                {
                    podcastCollection.map((podcast) => {
                        return (
                            <Podcast key={podcast.title.toString()}
                                     url={podcast.url}
                                     title={podcast.title}
                                     description={podcast.description}
                            />
                        )
                    })}
            </Box>
        </>
    )
}