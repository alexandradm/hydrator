import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import DatasetsPage from './containers/DatasetsPage'
import AddDatasetPage from './containers/AddDatasetPage'
import SettingsPage from './containers/SettingsPage'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={DatasetsPage} />
    <Route path="/datasets" component={DatasetsPage} />
    <Route path="/add" component={AddDatasetPage} />
    <Route path="/settings" component={SettingsPage} />
  </Route>
);
