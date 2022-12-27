import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader';
import { ProjectRoutes } from './app.routes';

import { queryClient } from './utils/react-query-client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalContext from './utils/providers/GlobalContext';

const App: React.FC = () => (
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <Router>
      <Suspense fallback={<Loader />}>
        <GlobalContext>
          <div className="App">
            <Navigation />

            <div className="container">
              <ProjectRoutes />
            </div>
          </div>
        </GlobalContext>
      </Suspense>
    </Router>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
