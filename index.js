import React, { useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/index';
import App from "./components/app";
import Login from './pages/Login';
import configDB from './data/customizer/config'
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageDebtors from './components/pages/master/ManageDebtors';
import ChangePassword from './pages/changepassword';


function Root() {
    const abortController = new AbortController();

    useEffect(() => {
        const layout = localStorage.getItem('layout_version') || configDB.data.color.layout_version
        
        document.body.classList.add(layout);

        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;

        return function cleanup() {
            abortController.abort();
        }

    }, [abortController]);

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                    <ScrollContext>
                        <Switch>
                            <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login} />
                            <Fragment>
                                <App>
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                                        return (<Redirect to={`${process.env.PUBLIC_URL}/pages/login`} />)
                                    }} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/managedebtors`} component={ManageDebtors}/>
                                    <Route path={`${process.env.PUBLIC_URL}/dashboard/changepassword`} component={ChangePassword} />
                                </App> 
                            </Fragment>
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();