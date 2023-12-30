import { Loading } from 'pages/Loading';
import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface RouterProviderProps {
  children?: ReactNode;
}

export const RouterProvider = ({ children }: RouterProviderProps) => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </BrowserRouter>
);
