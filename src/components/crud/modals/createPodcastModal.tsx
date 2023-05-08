import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Textarea,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import React, {FormEvent, useState} from "react";
import {CheckIcon} from "@chakra-ui/icons";
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/firebase/firebase";
import moment from "moment";

type MyModalProps = {
    readPodcast: any;
}
export const CreatePodcastModal:
    React.FunctionComponent<MyModalProps> = ({
                                                 readPodcast,
                                             }) => {
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
    const CreatePodcastInDB = async (title: string, description: string, url: string) => {
        const currentDate = new Date();
        const currentDateIso8601 = moment(currentDate).toISOString();
        const [docRef] = await Promise.all([addDoc(collection(db, "podcast"), {
            title: title,
            description: description,
            url: url,
            createAt: currentDateIso8601,
        })]);
    }
    const createPodcast = (e: FormEvent) => {
        e.preventDefault();
        setTimeout(async () => {
            await CreatePodcastInDB(title, description, url)
            setState('success');

        }, 400);
        setTimeout(async () => {
            setTitle("");
            setDescription("");
            setUrl("");
            setState('initial');
            onClose();
            readPodcast();
        }, 1000);
    }
    return (
        <>
            <Button onClick={onOpen}
                    minW='75px'
                    bg={useColorModeValue("green.300", "green.400")}
                    _hover={{
                        bg: "green.500"
                    }}>
                Nuevo podcast
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
                        Crea tu nuevo podcast ✌️
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <Stack
                            as={'form'}
                            spacing={'12px'}
                            onSubmit={createPodcast}>
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