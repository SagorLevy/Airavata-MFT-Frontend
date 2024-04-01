
import { useEffect } from 'react';
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
    Flex
} from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';

const data = [
    {
        "name": "macbook",
        "type": "LOCAL",
        "id": "fb9d852a-88b2-4980-8e12-1d19bd733a1f"
    },
    {
        "name": "scpazure",
        "type": "SCP",
        "id": "5b0f4c23-bc87-43de-acc4-e4004f1e3d20"
    },
];
export default function ListStorages()
{
    useEffect(() =>
    {
        async function getData()
        {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
            const data = await response.json();
            console.log('second page: ', data);
        }

        getData();
    }, []);

    const handleDelete = async (id) =>
    {
        console.log('deleting: ', id);
    };
    return (
        <>
            <NavBar />

            <Container maxW='container.2xl' p={4}>
                <Heading color='blue.600' size='lg'>List Storages</Heading>

                <TableContainer mt={8}>
                    <Table variant='simple'>
                        <TableCaption>List of all MFT storages</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Storage Name</Th>
                                <Th>Type</Th>
                                <Th>ID</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody alignitems='center'>
                            {
                                data.map((item, index) =>
                                {
                                    return (
                                        <Tr key={index}>
                                            <Td>{item.name}</Td>
                                            <Td><Badge colorScheme="blue">{item.type}</Badge></Td>
                                            <Td>{item.id}</Td>
                                            <Td>
                                                <Flex gap={2}>
                                                    <Button bg='green.300' size='sm' color='white' _hover={{
                                                        bg: 'green.600'
                                                    }} as='a' href={`storage/${item.id}`}>Open</Button>

                                                    <Button bg='red.300' size='sm' color='white' _hover={{
                                                        bg: 'red.600'
                                                    }} onClick={(e) => handleDelete(item.id)}>Delete</Button>
                                                </Flex>
                                            </Td>
                                        </Tr>
                                    );
                                }
                                )
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}
