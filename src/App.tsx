import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }: any) => {
  console.log('app component');
  return(
    <div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default App;