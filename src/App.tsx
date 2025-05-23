import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AppsPage from './pages/AppsPage';
import VibeCodingPage from './pages/VibeCodingPage';
import CreativesPage from './pages/CreativesPage';
import LearningPage from './pages/LearningPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/coding" element={<VibeCodingPage />} />
          <Route path="/creatives" element={<CreativesPage />} />
          <Route path="/learning" element={<LearningPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;