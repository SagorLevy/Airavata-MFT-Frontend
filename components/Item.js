import
{
    Badge, Tr, Td, Button, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    Text,
    Input,
    PopoverArrow,
    PopoverCloseButton,
    Box,
    PopoverAnchor,
} from "@chakra-ui/react";

import { Notice } from "./Notice";

export const Item = ({ name, type, size, router, id, path }) =>
{
    const handleMove = async () =>
    {
        console.log('moving: ', id);
    };

    const handleClick = () =>
    {
        if (type === "FILE")
        {
            return;
        }
        let currPath = 'http://localhost:3000' + router.asPath;
        let urlCurrPath = new URL(currPath);
        urlCurrPath.searchParams.set('path', path);
        router.push(urlCurrPath.toString());
    };
    return (
        <Tr onClick={handleClick} transition='all.2s' _hover={type === "DIR" ? {
            cursor: 'pointer',
            bg: 'blue.200'
        } : {}}>
            <Td>{name}</Td>
            <Td><Badge colorScheme={type === "FILE" ? "purple" : "green"}>{type}</Badge></Td>
            <Td>{size}</Td>


            <Td >
                <Popover>
                    <PopoverTrigger>
                        <Button>Move</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Notice status="info">
                                Under construction
                            </Notice>
                            <Text fontWeight='bold' mb={4}>Move To</Text>
                            <Box>
                                <Input placeholder="Path" />
                            </Box>
                            <Button onClick={handleMove} mt={4}>Move</Button>

                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Td>
        </Tr>
    );
};