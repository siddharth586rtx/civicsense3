import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ReportForm } from './components/ReportForm';
import { MapView } from './components/MapView';
import { Profile } from './components/Profile';
import { ViewType } from './types';
import { mockIssues } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard issues={mockIssues} />;
      case 'report': return <ReportForm />;
      case 'map': return <MapView issues={mockIssues} />;
      case 'profile': return <Profile issues={mockIssues} />;
      default: return <Dashboard issues={mockIssues} />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

export default App;