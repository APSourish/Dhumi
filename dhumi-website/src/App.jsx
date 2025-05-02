import React, { lazy, Suspense } from 'react';

// const Page = lazy(() => import('./Dhumi-page-1/Page'));
import Page from './Dhumi-page-1/Page';

function App(){
  return(
    // <Suspense fallback={<div>Loading...</div>}>
    //   <Page />
    // </Suspense>
    <Page/>
  )
}

export default App;