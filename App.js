
import React, { useEffect } from 'react';
import AppNavigation from './src/navigation';
import { apiCall } from './src/api/openAI';

const App = () => {
  useEffect(() => {
    apiCall('create an image of a doy playing width cat');
  },[])
  return (
    <AppNavigation />
  );
};

export default App;
