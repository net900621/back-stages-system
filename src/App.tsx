import React from 'react';
// import { useParams } from 'react-router-dom';
import { RouteList } from '@/route/router';
import './styles/common.scss';

function App() {
  // const { nobar } = useParams();

  return (
    <div>
      <RouteList /* nobar={Boolean(nobar)} */ />
    </div>
  );
}

export default App;
