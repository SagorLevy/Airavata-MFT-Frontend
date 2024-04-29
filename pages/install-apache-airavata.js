import { useEffect, useState } from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';
import {
    Button,
    Text,
    Table,
    Alert,
    AlertIcon,
    Heading,
    Container,
    Badge,
    Box,
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
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Switch
} from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';

export default function InstallApacheAiravata() {
    return (
        <>
            <NavBar />
            <Container maxW='container.2xl' p={4}>
                <Flex justify='space-between' alignItems='center'>
                    <Heading color='blue.600' size='lg'>Installing Apache Airavata</Heading>
                </Flex>
                <Tabs mt={8} variant='unstyled'>
                    <TabList>
                        <Tab rounded='md' _selected={{ color: 'white', bg: 'orange.500' }}>Windows</Tab>
                        <Tab rounded='md' _selected={{ color: 'white', bg: 'green.400' }}>Linux / MacOS</Tab>
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

const Windows = () => {
    return (
        <>
            <h1>Installation Steps for Windows</h1>
            <br />
            <Box marginLeft='20px'>
                <ol>
                    <li>Install a Linux OS <i>(Ubuntu will be used for this guide)</i></li>
                    <li>When prompted, create a default UNIX user account or login</li>
                    <li>Ensure the default directory is a user directory, not a root directory</li>
                    <i>Find the current directory via <b>pwd</b>. The directory should be <b>/home/[...]</b></i>
                    <br />
                    <i>If the current directory is <b>/root/[...]</b>, uninstall the Linux OS and reinstall</i>
                    <li>cd into user directory file locations via <b>cd /mnt/c</b></li>
                    <li>cd into project file directory</li>
                    <i>To find the current position within a directory, type <b>ls</b></i>
                    <br />
                    <i>To go back one directory, type <b>cd..</b></i>
                    <li>Install necessary packages</li>
                    <Box marginLeft='30px'>
                        <ul>
                            <b>
                                <li>sudo apt update</li>
                                <li>sudo ape install python3-pip</li>
                                <li>sudo apt install default-jre</li>
                            </b>
                        </ul>
                    </Box>
                    <li>Create a python virtual environment via <b>python3.10 -m venv venv</b></li>
                    <li>Activate the virtual environment via <b>source venv/bin/activate</b></li>
                    <li>Install Apache Airavata via <b>pip install airavata-mft-cli</b></li>
                    <li>Start Apache Airavata MFT via <b>mft init</b></li>
                </ol>
            </Box>
        </>
    );
};

const LinuxMacOS = () => {
    return (
        <>
            <h1>Under Construction</h1>
            <ol>
                <li>Download Apache Airavata for Windows from the official website.</li>
                <li>Run the installer and follow the on-screen instructions.</li>
                <li>Set up a default UNIX-like environment using WSL (Windows Subsystem for Linux).</li>
                <li>Open WSL and execute the following commands:</li>
                <li>wsl--install (installs Linux)</li>
                <li>sudo apt update</li>
                <li>sudo apt install python3-pip</li>
                <li>sudo apt install default-jre</li>
                <li>python3.10 -m venv venv</li>
                <li>source venv/bin/activate</li>
                <li>pip install airavata-mft-cli</li>
                <li>mfi init (starts mft)</li>
            </ol>
        </>
    );
};
