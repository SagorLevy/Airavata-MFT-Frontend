import { Box, Flex, Link, Image } from '@chakra-ui/react';

export const NavBar = () =>
{
    return (
        <Box>

            <Flex p={4} justify='space-between' alignItems='center'>
                <Box>
                    <Image src='/logo.png' alt='logo' height={50} />
                </Box>

                <Flex gap={4} color='blue.600' fontWeight='bold' >
                    <Link href='/' _hover={{
                        color: 'blue.800'
                    }}>Home</Link>
                    <Link href='/list-storages' _hover={{
                        color: 'blue.800'
                    }}>List Storages</Link>

                </Flex>
            </Flex>
        </Box>
    );
};