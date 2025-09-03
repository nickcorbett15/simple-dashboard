import { Flex, Text, Image, View } from '@aws-amplify/ui-react';


export default function Header() {
    return (
        <Flex
            as="header"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem"
            backgroundColor="var(--amplify-colors-background-primary)"
            boxShadow="small"
            width="100%"
            height="64px"
        >
            {/* Left side: Logo + App Name */}
            <Flex alignItems="center" gap="0.5rem">
                <Image
                    src="src/assets/react.svg" // replace with your logo path
                    alt=""
                    width="32px"
                    height="32px"
                />
                <Text fontSize="xl" fontWeight="600">
                    MyApp
                </Text>
            </Flex>

            {/* Right side: Profile button */}
            <View
                aria-label="Profile"
                backgroundColor="transparent"
                border="none"
            >
                <Text>User</Text>
            </View>
        </Flex>
    );
}
