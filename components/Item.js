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

export const Item = ({ name, type, size, path, id }) =>
{

    const handleMove = async () =>
    {
        console.log('moving: ', id);
    };
    return (
        <Tr>
            <Td>{name}</Td>
            <Td><Badge colorScheme="green">{type}</Badge></Td>
            <Td>{size}</Td>
            <Td>{id}</Td>


            <Td>
                <Popover>
                    <PopoverTrigger>
                        <Button>Move</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        {/* <PopoverHeader>Move To</PopoverHeader> */}
                        <PopoverBody>
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