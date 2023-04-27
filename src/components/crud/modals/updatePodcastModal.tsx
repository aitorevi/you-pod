import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, Button, useDisclosure, FormControl, FormLabel, Input, useColorModeValue, Textarea, Stack,
} from '@chakra-ui/react'
import React, {FormEvent, useState} from "react";
import {CheckIcon} from "@chakra-ui/icons";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "@/firebase/firebase";

type MyModalProps = {
    readPodcast: any;
    id: any;
    oldTitle: string;
    oldDescription: string;
    oldUrl: string;
}
export const UpdateModal:
    React.FunctionComponent<MyModalProps> = ({
                                                 readPodcast,
                                                 id,
                                                 oldTitle,
                                                 oldDescription,
                                                 oldUrl,
                                             }) => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    const [title, setTitle] = useState(oldTitle);
    const [description, setDescription] = useState(oldDescription);
    const [url, setUrl] = useState(oldUrl);
    const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
        'initial'
    );

    const handleChangeTitle = async (e: any) => {
        await setTitle(e.target.value);
    };
    const handleChangeDescription = async (e: any) => {
        setDescription(e.target.value);
    };
    const handleChangeUrl = async (e: any) => {
        setUrl(e.target.value);
    };
    const UpdatePodcastInDB = async (id: string, title: string, description: string, url: string) => {
        {
            await updateDoc(doc(db, "podcast", id), {title, description, url});
            readPodcast();
        }
    }
    const updatePodcast = (e: FormEvent) => {
        e.preventDefault();
        setTimeout(async () => {
            await UpdatePodcastInDB(id, title, description, url)
            setState('success');

        }, 400);
        setTimeout(async () => {
            onClose();
            setState('initial');

            readPodcast();
        }, 1000);
    }
    return (
        <>
            <Button onClick={onOpen}
                    minW='75px'
                    bg={useColorModeValue("orange.300", "orange.400")}
                    _hover={{
                        bg: "orange.500",
                    }}>
                Editar
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
                        edita tu nuevo podcast ✌️
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <Stack
                            as={'form'}
                            spacing={'12px'}
                            onSubmit={updatePodcast}
                        >
                            <FormControl>
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
                                    type={'url'}
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