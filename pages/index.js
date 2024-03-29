import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { Box, Image, Button, Link, Flex } from '@chakra-ui/react';

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
      {/* <Link href='/list-storages'>Go to list storages</Link> */}
      {/* NavBar */}

      <NavBar />

    </>
  );
}
