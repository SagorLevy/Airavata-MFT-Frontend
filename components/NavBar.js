import { Box, Flex, Link, Text } from '@chakra-ui/react';

export const NavBar = () =>
{
    return (
        <Box>
            <Flex p={4} justify='space-between' alignItems='center' shadow='md'>
                <Box>
                    {/* <Image src='/logo.png' alt='logo' height={50} /> */}
                    <Text fontSize='2xl' color='blue.600' fontWeight='black' >MFT Browser</Text>
                </Box>

                <Flex gap={6} color='blue.600' fontWeight='bold' >
                    <Link href='/' _hover={{
                        color: 'blue.700'
                    }}>Home</Link>
                    <Link href='/list-storages' _hover={{
                        color: 'blue.700'
                    }}>List Storages</Link>

                    <Link href='/add-storage' _hover={{
                        color: 'blue.700'
                    }}>Add Storage</Link>

                </Flex>
            </Flex>
        </Box>
    );
};