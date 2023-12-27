import ReactDOM from 'react-dom/client';
import { Pages } from './pages/index';
import { ChakraProvider } from '@chakra-ui/react';
// import { CombinedProviders } from './app/lib';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </ChakraProvider>
);
