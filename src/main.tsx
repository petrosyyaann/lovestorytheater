import ReactDOM from 'react-dom/client';
import { Pages } from './pages/index';
import { CombinedProviders } from './app/lib';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CombinedProviders>
    <Pages />
  </CombinedProviders>
);
