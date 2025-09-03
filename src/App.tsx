import '@aws-amplify/ui-react/styles.css'
import { useState } from 'react';
import { View, useTheme, Grid } from '@aws-amplify/ui-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Models from './pages/Models';
import History from './pages/History';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';


function Layout() {
    const { tokens } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Grid
            templateColumns={{ base: '1fr', large: `${collapsed ? '80px' : '250px'} 1fr` }}
            templateRows={{ base: 'auto 1fr', large: '80px 1fr' }}
            gap={tokens.space.small}
            width="100vw"
            height="100vh"
        >
            {/* Header */}
            <View
                columnSpan={{ base: 1, large: 2 }}
                backgroundColor={tokens.colors.pink[10]}
            >
                <Header />
            </View>

            {/* Sidebar */}
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            {/* Main Content */}
            <View backgroundColor={tokens.colors.pink[40]} padding="1rem">
                <Outlet />
            </View>
        </Grid>
    );
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'models', element: <Models /> },
            { path: 'history', element: <History /> },
        ],
    },
]);

function App() {
    const { tokens } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
