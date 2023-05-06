import {Box, useColorModeValue} from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
    return (
        <>
            <Box
                bg={useColorModeValue('gray.50', 'gray.800')}
                minH={'100vh'}>
            </Box>
        </>
    )
}

export default HomePage;