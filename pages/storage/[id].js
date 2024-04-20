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

import { Item } from '../../components/Item';
import { useEffect, useState } from 'react';

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
    const [currDirs, setCurrDirs] = useState([]);
    const [currFiles, setCurrFiles] = useState([]);
    const path = router.query.path || '/';

    console.log('router: ', router);

    useEffect(() => {

        async function getFiles() {
            const response = await fetch(`http://localhost:5500/list-storages/${router.query.id}`, {
                method: 'GET',
                headers: {
                    storagetype: router.query.storagetype,
                    path: router.query.path
                }
            })

            try {
                const data = await response.json();
                setCurrDirs(data.directory.directories);
                setCurrFiles(data.directory.files);
            } catch(e) {

            }
        }

        getFiles();

    }, [router])
    return (
        <>
            <NavBar />

            <Container maxW='container.2xl' p={4}>
                <Heading color='blue.600' size='md'>{router.query.storagename} ({router.query.id})</Heading>

                <Text mt={2} fontWeight='medium'><Text as='span' fontWeight='bold'>Current Path</Text>: {router.query.storagename}{path} (<Text as='span' mt={4} onClick={() => {
                    router.back();
                }}><Link color='blue.400'>back</Link></Text>)</Text>

                

                <TableContainer mt={8}>
                    <Table variant='simple'>
                        <TableCaption>List of all files and directories</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Type</Th>
                                <Th>Size</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                currFiles.map((item, i) => {
                                    return (
                                    <Item key={i} name={item.friendlyName} path={item.resourcePath} size={item.resourceSize} type="FILE" router={router} updateTime={item.createdTime} />
                                )})
                            }

                            {
                                currDirs.map((item, i) => {
                                    return (
                                    <Item key={i} name={item.friendlyName} path={item.resourcePath} router={router} type="DIR" updateTime={item.updateTime} />
                                )})
                            }

                        </Tbody>
                    </Table>
                </TableContainer>


            </Container>
        </>
    );
}