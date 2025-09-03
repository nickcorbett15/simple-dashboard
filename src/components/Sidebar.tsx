import { Flex, Button, Text } from '@aws-amplify/ui-react';
import { Home, Box, History, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
    return (
        <Flex
            direction="column"
            alignItems={collapsed ? 'center' : 'flex-start'}
            padding="1rem"
            gap="1rem"
            width={collapsed ? '80px' : '250px'}
            height="100%"
            backgroundColor="var(--amplify-colors-background-secondary)"
            boxShadow="small"
        >
            {/* Collapse/Expand button */}
            <Button
                variation="link"
                onClick={() => setCollapsed(!collapsed)}
                justifyContent={collapsed ? 'center' : 'flex-start'}
                width="100%"
            >
                {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>

            {/* Tabs */}
            <Button variation="link" justifyContent={collapsed ? 'center' : 'flex-start'} width="100%" gap="0.5rem">
                <Home size={20} /> {!collapsed && <Text>Home</Text>}
            </Button>

            <Button variation="link" justifyContent={collapsed ? 'center' : 'flex-start'} width="100%" gap="0.5rem">
                <Box size={20} /> {!collapsed && <Text>Models</Text>}
            </Button>

            <Button variation="link" justifyContent={collapsed ? 'center' : 'flex-start'} width="100%" gap="0.5rem">
                <History size={20} /> {!collapsed && <Text>History</Text>}
            </Button>
        </Flex>
    );
}
