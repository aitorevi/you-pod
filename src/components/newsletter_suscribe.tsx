'use client';
import {FormEvent, useState} from 'react';
import {
    Stack,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Container,
    Flex,
} from '@chakra-ui/react';
import {CheckIcon} from '@chakra-ui/icons';
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/firebase/firebase";
export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
        'initial'
    );
    const [error, setError] = useState(false);
    const handleChange = (e: any) => {
        setEmail(e.target.value);
    };
    const InsertNewsletterEmailInDB = async (email: string) => {
        {
            const [docRef] = await Promise.all([addDoc(collection(db, "newsletter"), {
                email: email
            })]);
        }
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Container
                maxW={'lg'}
                bg={useColorModeValue('white', 'whiteAlpha.100')}
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}>
                <Heading
                    as={'h2'}
                    fontSize={{base: 'xl', sm: '2xl'}}
                    textAlign={'center'}
                    mb={5}>
                    Newsletter
                </Heading>
                <Stack
                    direction={{base: 'column', md: 'row'}}
                    as={'form'}
                    spacing={'12px'}
                    onSubmit={(e: FormEvent) => {
                        e.preventDefault();
                        setError(false);
                        setState('submitting');
                        setTimeout(async () => {
                            if (email === 'fail@example.com') {
                                setError(true);
                                setState('initial');
                                return;
                            }

                            await InsertNewsletterEmailInDB(email)

                            setState('success');
                        }, 400);
                        setTimeout(async () => {
                            setState('initial');
                            setEmail('');
                        }, 1700)
                    }}>
                    <FormControl>
                        <Input
                            variant={'solid'}
                            borderWidth={1}
                            color={'gray.800'}
                            _placeholder={{
                                color: 'gray.400',
                            }}
                            borderColor={useColorModeValue('gray.300', 'gray.700')}
                            id={'email'}
                            type={'email'}
                            required
                            placeholder={'Escribe tu email'}
                            aria-label={'Escribe tu email'}
                            value={email}
                            disabled={state !== 'initial'}
                            onChange={handleChange}/>
                    </FormControl>
                    <FormControl w={{base: '100%', md: '40%'}}>
                        <Button
                            colorScheme={state === 'success' ? 'green' : 'purple'}
                            isLoading={state === 'submitting'}
                            w="100%"
                            type={state === 'success' ? 'button' : 'submit'}>
                            {state === 'success' ? <CheckIcon/> : 'Suscribirse'}
                        </Button>
                    </FormControl>
                </Stack>
                <Text
                    mt={2}
                    textAlign={'center'}
                    color={error ? 'red.500' : 'gray.500'}>
                    {error
                        ? 'Oh no an error occured! 😢 Please try again later.'
                        : "No recibirás nada de spam! ✌️"}
                </Text>
            </Container>
        </Flex>
    );
}
