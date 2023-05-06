import {Flex, useColorModeValue} from "@chakra-ui/react";
import {Spinner} from "@chakra-ui/spinner";
import React from "react";

const CustomSpinner = () => {
    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='gray.700'
                    size='xl'
                />
            </Flex>
        </>
    )
}
export default CustomSpinner;