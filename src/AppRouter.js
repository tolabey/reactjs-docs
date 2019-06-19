import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Menu = lazy(() => import("./Menu"));
const Fragments = lazy(() => import("./Components/Fragments/Fragments"));
const Refs = lazy(() => import( "./Components/Refs/Refs"));


function AppRouter() {
  return (
    <div className="Router">
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Menu}/>
                    <Route path="/fragments" component={Fragments} />
                    <Route path="/refs" component={Refs} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default AppRouter;
