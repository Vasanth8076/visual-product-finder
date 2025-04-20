import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../../pages/home/ui/HomePage.tsx';
import { ThemeProvider } from '../../../shared/theme/ThemeContext.tsx';
import SearchResults from '../../../shared/ui/search-results/searchResults.tsx';
import LensResultsPage from '../../../features/lens/ui/LensResultsPage.tsx';
import { AppRoutes as Paths } from '../../../shared/config/routes/paths.ts';

const AppRoutes = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path={Paths.ROOT} element={<Navigate to={Paths.HOME} replace />} />
        <Route path={Paths.HOME} element={<HomePage />} />
        <Route path={Paths.SEARCH} element={<SearchResults />} />
        <Route path={Paths.LENS_RESULTS} element={<LensResultsPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default AppRoutes;

