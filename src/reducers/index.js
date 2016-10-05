import { routerReducer } from 'react-native-redux-router'
import { combineReducers } from 'redux'
import privateSitesReducer from './privateSitesReducer'
import publicSitesReducer from './privateSitesReducer'
import addSiteReducer from './addSiteReducer'

module.exports = combineReducers({
  routerReducer,
  privateSites: privateSitesReducer,
  publicSites: publicSitesReducer,
  addSite: addSiteReducer
});
