import React from 'react';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Home from "./pages/Home";

const AppRouter: React.FC = (props ) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact
                       path="/page1"
                       render={(props: RouteComponentProps) => (
                           <Page1 {...props} />
                       )}
                />
                <Route exact
                       path="/page2"
                       render={(props: RouteComponentProps) => (
                           <Page2 {...props} />
                       )}
                />
                <Route exact
                       path="/"
                       render={(props: RouteComponentProps) => (
                           <Home {...props} />
                       )}
                />
            </Switch>
            {props.children}
        </BrowserRouter>
    );
};

export default AppRouter;
