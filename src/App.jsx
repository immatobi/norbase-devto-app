import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLoader from './components/helpers/MainLoader'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorUI from './components/layouts/ErrorUI'

import PostState from './context/posts/postState'

const Home = React.lazy(() => import('./components/pages/Home'))
const NetworkUI = React.lazy(() => import('./components/layouts/NetworkErrorUI'))

const App = () => {

  const errorHandler = (err, info) => {

    console.log(err, 'logged error');
    console.log(info, 'logged error info');

  }

  return (

    <Router>

      <PostState>

        <Suspense fallback={MainLoader.MainLoader()}>

          <ErrorBoundary fallback={ErrorUI()} onError={errorHandler} >

              <Routes>

                  <Route path="/" element={<Home />} />
                  <Route path="/network-error" element={NetworkUI} />
                  <Route path="*" element={<Home />} />

              </Routes>

            </ErrorBoundary>

        </Suspense>

      </PostState>

    </Router>

  );

}

export default App;
