
import { useEffect, useState } from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';

import
{
    Button, Text, Table,
    Alert,
    AlertIcon,
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
export default function InstallApacheAiravata()
{
    return (
        <>
            <NavBar />

            <Container maxW='container.2xl' p={4}>

                <Flex justify='space-between' alignItems='center'>
                    <Heading color='blue.600' size='lg'>Installing Apache Airavata</Heading>

                <Tabs mt={8} variant='unstyled'>
                    <TabList>
                        <Tab rounded='md' _selected={{ color: 'white', bg: 'orange.500' }}>SCP</Tab>
                        <Tab rounded='md' _selected={{ color: 'white', bg: 'green.400' }}>S3</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel bg='orange.50' p={4} rounded='md'>
                            <Windows />
                        </TabPanel>
                        <TabPanel bg='green.50' p={4} rounded='md'>
                            <LinuxMacOS />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Container>
        </>
    );
}


const Windows = () =>
{
    return (
        <>
                return (
        <>
            <h1>Installation Steps for Windows</h1>
            <ol>
                <li>Download Apache Airavata for Windows from the official website.</li>
                <li>Run the installer and follow the on-screen instructions.</li>
                <li>Set up a default UNIX-like environment using WSL (Windows Subsystem for Linux).</li>
                <li>Open WSL and execute the following commands:</li>
                <ul>
                    <li>wsl --install (installs Linux)</li>
                    <li>sudo apt update</li>
                    <li>sudo apt install python3-pip</li>
                    <li>sudo apt install default-jre</li>
                    <li>python3.10 -m venv venv</li>
                    <li>source venv/bin/activate</li>
                    <li>pip install airavata-mft-cli</li>
                    <li>mfi init (starts mft)</li>
                </ul>
            </ol>
        </>
    );
};
        </>
    );
};


const LinuxMacOS = () =>
{
    return (
        <>
            <h1>Under Construction</h1>
            <ol>
                <li>Download Apache Airavata for Windows from the official website.</li>
                <li>Run the installer and follow the on-screen instructions.</li>
                <li>Set up a default UNIX-like environment using WSL (Windows Subsystem for Linux).</li>
                <li>Open WSL and execute the following commands:</li>
                <ul>
                    <li>wsl --install (installs Linux)</li>
                    <li>sudo apt update</li>
                    <li>sudo apt install python3-pip</li>
                    <li>sudo apt install default-jre</li>
                    <li>python3.10 -m venv venv</li>
                    <li>source venv/bin/activate</li>
                    <li>pip install airavata-mft-cli</li>
                    <li>mfi init (starts mft)</li>
                </ul>
            </ol>
        </>
};
