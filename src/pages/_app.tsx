import { lazy, Suspense, FC } from 'react';
import '@Styles/App.css';
import { Route, Switch, useRoute } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Home from '@Components/Home';
import { MainPaths } from '@Enums/paths/main-paths.enum';

const LoginPage = lazy(() => import('@Pages/login'));

const App: FC = () => {
  const [match] = useRoute(MainPaths.LOGIN);
  console.log({ match });

  return (
    <HelmetProvider>
      <div className="App">
        <Suspense fallback={<div />}>
          <section className="App-content">
            {match || <Header />}
            <main className="App-main">
              <Switch>
                <Route component={Home} path={MainPaths.INDEX} />
                <Route path={MainPaths.LOGIN}>
                  <LoginPage />
                </Route>
              </Switch>
            </main>
            {match || <Footer />}
          </section>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default App;
