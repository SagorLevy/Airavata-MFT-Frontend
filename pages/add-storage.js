
import { useEffect, useState } from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';

import
{
    Button, Text, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Container,
    Badge,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    SimpleGrid,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    Switch

} from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
export default function AddStorage()
{
    // useEffect(() =>
    // {
    //     async function getData()
    //     {
    //         const response = await fetch('http://localhost:5500/list-storages', {
    //             method: 'GET',
    //             headers: {
    //                 'currentPath': 'add-storages',
    //             }
    //         });
    //         const data = await response.json();
    //         console.log('second page: ', data);
    //     }

    //     getData();
    // }, []);

    const handleDelete = async (id) =>
    {
        console.log('deleting: ', id);
    };
    return (
        <>
            <NavBar />

            <Container maxW='container.2xl' p={4}>
                <Flex justify='space-between' alignItems='center'>
                    <Heading color='blue.600' size='lg'>Add Storage</Heading>

                    <Button bg='blue.400' size='sm' color='white' _hover={{
                        bg: 'blue.600'
                    }} as='a' href='/list-storages'>Back to List Storage</Button>
                </Flex>

                <Tabs mt={8} variant='unstyled'>
                    <TabList>
                        <Tab rounded='md' _selected={{ color: 'white', bg: 'yellow.500' }}>SCP</Tab>
                        <Tab rounded='md' _selected={{ color: 'white', bg: 'purple.400' }}>S3</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel bg='yellow.50' p={4} rounded='md'>
                            <SCPForm />
                        </TabPanel>
                        <TabPanel bg='purple.50' p={4} rounded='md'>
                            <S3Form />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Container>
        </>
    );
}


const SCPForm = () =>
{
    return (
        <>
            <Formik
                initialValues={{
                    private_key_location: '~/.ssh/id_rsa',
                    public_key_location: '~/.ssh/id_rsa.pub',
                    passphrase: '',
                    host_name_ip: '172.172.240.41',
                    username: 'azureuser',
                    storage_name: 'scp-storage',
                }}
                onSubmit={(values, actions) =>
                {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form>
                        <SimpleGrid columns={2} spacing={4}>
                            <Field name='private_key_location'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Private Key Location</FormLabel>
                                            <Input {...field} placeholder='private key location' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='public_key_location'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Public Key Location</FormLabel>
                                            <Input {...field} placeholder='public key location' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='passphrase'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl>
                                            <FormLabel>Passphrase</FormLabel>
                                            <Input {...field} placeholder='SSH passphrase' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='host_name_ip'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Host Name/IP</FormLabel>
                                            <Input {...field} placeholder='hostname/ip' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='username'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Username</FormLabel>
                                            <Input {...field} placeholder='username' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>
                            <Field name='storage_name'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Username</FormLabel>
                                            <Input {...field} placeholder='storage name' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                        </SimpleGrid>
                        <Button
                            mt={4}
                            colorScheme='yellow'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>

        </>
    );
};


const S3Form = () =>
{
    const [isSessionToken, setIsSessionToken] = useState(true);
    const [isS3Bucket, setIsS3Bucket] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    access_key_id: '???',
                    secret_access_key: '???',
                }}
                onSubmit={(values, actions) =>
                {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form>
                        <SimpleGrid columns={2} spacing={4}>
                            <Field name='access_key_id'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Access Key ID</FormLabel>
                                            <Input {...field} placeholder='access_key_id' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='secret_access_key'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Secret Access Key</FormLabel>
                                            <Input {...field} placeholder='secret_access_key' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>


                            <FormControl>
                                <FormLabel>Session Token?</FormLabel>
                                <Switch isChecked={isSessionToken}
                                    onChange={() => setIsSessionToken(!isSessionToken)} colorScheme='purple' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>AWS S3 Bucket?</FormLabel>
                                <Switch isChecked={isS3Bucket}
                                    onChange={() => setIsS3Bucket(!isS3Bucket)} colorScheme='purple' />
                            </FormControl>

                        </SimpleGrid>

                        <Button
                            mt={4}
                            colorScheme='purple'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>

        </>
    );
};