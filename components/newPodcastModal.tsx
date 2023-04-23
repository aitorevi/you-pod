import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, Button, useDisclosure, FormControl, FormLabel, Input, useColorModeValue, Textarea, Stack,
} from '@chakra-ui/react'
import React, {FormEvent, useState} from "react";
import {CreatePodcastInDB} from "./crudPodcast";
import {CheckIcon} from "@chakra-ui/icons";

export function InitialFocus() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
        'initial'
    );

    const handleChangeTitle = async (e: any) => {
        setTitle(e.target.value);
    };
    const handleChangeDescription = async (e: any) => {
        setDescription(e.target.value);
    };
    const handleChangeUrl = async (e: any) => {
        setUrl(e.target.value);
    };

    const createPodcast = (e: FormEvent) => {
        e.preventDefault();
        setTimeout(async () => {

            await CreatePodcastInDB(title, description, url)

            setState('success');
        }, 400);
        setTimeout(async () => {
            onClose();
            window.location.reload()
        }, 1500);
    }

    // function handleSubmit(e: any) {
    //     e.preventDefault();
    // }

    return (
        <>
            <Button onClick={onOpen}
                    minW='75px'
                    bg={useColorModeValue('green.300', 'green.400')}
                    _hover={{
                        bg: 'green.500',
                    }}
                    marginY={2}>
                Nuevo
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader
                        mt={2}
                        textAlign={'center'}>
                        Crea un nuevo podcast ✌️
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <Stack
                            as={'form'}
                            spacing={'12px'}
                            onSubmit={createPodcast}>
                            <FormControl
                                // onSubmit={handleSubmit}
                            >
                                <FormLabel>Titulo</FormLabel>
                                <Input
                                    id={'title'}
                                    type={'text'}
                                    placeholder='Titulo'
                                    value={title}
                                    required
                                    disabled={state !== 'initial'}
                                    onChange={handleChangeTitle}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Descripción</FormLabel>
                                <Textarea
                                    id={'description'}
                                    placeholder='Descripción'
                                    value={description}
                                    required
                                    disabled={state !== 'initial'}
                                    onChange={handleChangeDescription}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Url</FormLabel>
                                <Input
                                    id={'url'}
                                    type={'text'}
                                    placeholder='Url'
                                    value={url}
                                    required
                                    disabled={state !== 'initial'}
                                    onChange={handleChangeUrl}
                                />
                            </FormControl>
                            <Button
                                colorScheme={state === 'success' ? 'green' : 'purple'}
                                isLoading={state === 'submitting'}
                                w="100%"
                                type={state === 'success' ? 'button' : 'submit'}>
                                {state === 'success' ? <CheckIcon/> : 'Guardar'}

                            </Button>
                            <Button onClick={onClose}>Cancelar</Button>
                        </Stack>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )
}