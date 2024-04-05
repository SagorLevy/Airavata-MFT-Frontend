import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { Box, Image, Button, Link, Flex, Heading, Container, Text } from '@chakra-ui/react';

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
        <Box textAlign='center' maxW='400px' mx='auto'>
          <Heading fontWeight='black' fontSize='5xl'>
            Airavata <Text as='span' color='blue.400'>MFT</Text>
          </Heading>

          <Text mt={4}>A local user interface for Apache Airavata Managed File Transfers (MFT)</Text>

          <Button as='a' href='/list-storages' colorScheme='blue' mt={4}>Get Started</Button>
        </Box>

      </Container >


    </>
  );
}
