import { Alert, AlertIcon } from '@chakra-ui/react';

export const Notice = ({ status, children }) =>
{
    return (
        <Alert status={status}>
            <AlertIcon />
            {children}
        </Alert>
    );
};