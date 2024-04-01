import { useRouter } from 'next/router';
import { NavBar } from '../../components/NavBar';

import
{
    Container, Heading, Text, Button, Link, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Badge,
    TableContainer,
} from '@chakra-ui/react';

const currDirData = [
    {
        "name": "test_img.png",
        "type": "FILE",
        "id": "fb9d852a-88b2-4980-8e12-1d19bd733a1f",
        "size": "1.2MB"
    },
    {
        "name": "hello.txt",
        "type": "FILE",
        "id": "fb9d852a-88b2-4980-8e12-1d19bd733ak9",
        "size": "1.5MB"
    }
];
export default function StorageDynamic()
{
    const router = useRouter();
    return (
        <>
            <NavBar />

            <Container maxW='container.2xl' p={4}>
                <Heading color='blue.600' size='md'>storagename ({router.query.id})</Heading>

                <Text mt={2} fontWeight='medium'>scpazure//path/to/dir</Text>

                <Text mt={4}><Link color='blue.400'>back to parent</Link></Text>

                <TableContainer mt={8}>
                    <Table variant='simple'>
                        <TableCaption>List of all files and directories</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Type</Th>
                                <Th>Size</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {currDirData.map((item) => (
                                <Tr key={item.id}>
                                    <Td>{item.name}</Td>
                                    <Td><Badge colorScheme="green">{item.type}</Badge></Td>
                                    <Td>{item.size}</Td>

                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>


            </Container>
        </>
    );
}