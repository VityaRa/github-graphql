import RootPage from '@/pages/RootPage/ui/RootPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTE_PATHS } from './paths';
import RepoDetailPage from '@/pages/RepoDetailPage/ui/RepoDetailPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_PATHS.root} element={<RootPage />} />
        <Route path={ROUTE_PATHS.detail} element={<RepoDetailPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
