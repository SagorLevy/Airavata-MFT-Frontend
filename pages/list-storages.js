
import { useEffect, useState } from 'react';
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

const colorSchemeMapper = {
    "SCP": "purple",
    "LOCAL": "green",
    "S3": "blue",
};
export default function ListStorages()
{
    const [dataUse, setDataUse] = useState([{}]);
    useEffect(() =>
    {
        async function getData()
        {
            const response = await fetch('http://localhost:5500/list-storages', {
                method: 'GET',
                headers: {
                    'currentPath': 'list-storages',
                }
            });
            const data = await response.json();
            console.log('second page: ', data);
            setDataUse(data.storageList);

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
                <Flex justify='space-between' alignItems='center'>
                    <Heading color='blue.600' size='lg'>List Storages</Heading>

                    <Button bg='blue.400' size='sm' color='white' _hover={{
                        bg: 'blue.600'
                    }} as='a' href='/add-storage'>Add Storage</Button>
                </Flex>
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
                                dataUse.map((item, index) =>
                                {
                                    return (
                                        <Tr key={index}>
                                            <Td>{item.storageName}</Td>
                                            <Td><Badge colorScheme={colorSchemeMapper[item.storageType]}>{item.storageType}</Badge></Td>
                                            <Td>{item.storageId}</Td>
                                            <Td>
                                                <Flex gap={2}>
                                                    <Button bg='green.300' size='sm' color='white' _hover={{
                                                        bg: 'green.600'
                                                    }} as='a' href={`storage/${item.storageId}?storagetype=${item.storageType}&storagename=${item.storageName}&path=/`}>Open</Button>

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
