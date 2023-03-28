import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import App from './App';
import theme from './theme';
import './index.css';
import {QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <App/>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
