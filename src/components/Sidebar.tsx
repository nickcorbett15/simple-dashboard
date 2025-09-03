import { Flex, Button } from '@aws-amplify/ui-react';

export default function Sidebar() {
    return (
        <Flex
            as="nav"
            direction="column"
            alignItems="flex-start"
            padding="1rem"
            gap="1rem"
            width="250px"
            height="100vh"
            backgroundColor="var(--amplify-colors-background-secondary)"
            boxShadow="small"
        >
            <Button
                variation="link"
                justifyContent="flex-start"
                width="100%"
                fontSize="lg"
                gap="0.5rem"
            >
                Home
            </Button>

            <Button
                variation="link"
                justifyContent="flex-start"
                width="100%"
                fontSize="lg"
                gap="0.5rem"
            >
                Models
            </Button>

            <Button
                variation="link"
                justifyContent="flex-start"
                width="100%"
                fontSize="lg"
                gap="0.5rem"
            >
                History
            </Button>
        </Flex>
    );
}
