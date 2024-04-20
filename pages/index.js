import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import
{
  Box, Link, Heading, Container, Text
} from '@chakra-ui/react';

import { NavBar } from '../components/NavBar';

export default function Home()
{
  useEffect(() =>
  {
    async function getData()
    {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log('gah', data);
    }

    getData();
  }, []);


  return (
    <>
      <NavBar />


      <Container maxW='container.2xl' p={4}>
        <Box textAlign='center' maxW='600px' mx='auto'>
          <Heading fontWeight='black' fontSize='5xl'>
            Airavata MFT <Text as='span' color='blue.400'>Browser</Text>
          </Heading>

          <Text mt={4}>A local user interface for Apache Airavata Managed File Transfers (MFT). Note: <Text as='span' fontWeight='bold'>this MFT Browser relies on the backend being set up</Text>. You can setup the backend locally by following the instructions <Link href="https://github.com/ganning127/mft-ui-backend" color='blue.400'>in this repository</Link>. You will also need to have Airavata MFT installed and running locally on your computer already for this to work.</Text>

          <Text fontSize='lg' fontWeight='bold' mt={8}>How It Works</Text>
          <Text>This ElectronJS and NextJS application was written by Ganning Xu to allow users to browse files in their MFT storages in a user interface. The ElectronJS application serves as the frontend, while the backend repository linked above serves as middleware between this frontend and the actual MFT GRPC API.</Text>

          <Text fontSize='lg' fontWeight='bold' mt={8}>Features</Text>
          <Text>Currently, the following features are fully functional: listing storages, listing files within storages, browsing files within storages. The following functionalities are still in development: adding storages, moving/copying files, downloading files.</Text>


          {/* <Button as='a' href='/list-storages' colorScheme='blue' mt={4}>Get Started</Button> */}
        </Box>

      </Container >


    </>
  );
}
