import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Page404 } from './Page404';
import { Layout } from '../ui/Layout';

const Header = lazy(() => import('modules/Header/Header'));
const Footer = lazy(() => import('modules/Footer/Footer'));

const HomePage = lazy(() => import('./Home'));

export const Pages = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/lovestorytheater' element={<HomePage />} /> */}
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </Layout>
  );
};
