import '@aws-amplify/ui-react/styles.css'
import { View, useTheme, Grid } from '@aws-amplify/ui-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
    const { tokens } = useTheme();
    return (
        <div>
            <Grid
                templateColumns={{ base: '1fr', large: '250px 1fr' }} // sidebar smaller
                templateRows={{ base: 'auto 1fr', large: '80px 1fr' }} // header smaller
                gap={tokens.space.small}
                width="100vw"
                height="100vh"
            >
                {/* Header */}
                <View
                    columnSpan={{ base: 1, large: 2 }}
                    backgroundColor={tokens.colors.pink[10]}
                >
                    <Header></Header>
                </View>

                {/* Sidebar */}
                <View
                    backgroundColor={tokens.colors.pink[20]}
                >
                    <Sidebar></Sidebar>
                </View>

                {/* Main Content */}
                <View
                    backgroundColor={tokens.colors.pink[40]}
                >
                    Main Content
                </View>
            </Grid>
        </div>
    );
}

export default App
