import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl
} from 'react-native'
import MapView from 'react-native-maps'
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps'
import { connect } from 'react-redux'
import SitesNavBar from '../navbars/sites-navbar'

const defaultPageStyles = require('../../styles/default-page');
const styles = StyleSheet.create({
  noSitesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sitesListWrapper: {
    width: 250
  },
  pageContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  mapContainer: {
    flex: 1
  }
});

class SitesView extends Component {

  getView () {
    if (this.props.privateSites.data.length) {
      return (
          <View style={ styles.siteCardsContainer }>
          {
            this.props.privateSites.data.map((site) => {
              return (
                <View style={styles.siteCard}></View>
              );
            })
          }
        </View>
      )
    } else {
      return (<View style={ styles.noSitesContainer }><Text>There are no sites</Text></View>)
    }
  }

  _onRefresh () {
    console.log(this);
  }

  render () {
      return (
        <View style={ defaultPageStyles.pageWithStatusBar }>
          <SitesNavBar />
          <View style={ styles.pageContainer }>
            <View style={ styles.sitesListWrapper }>
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={false}
                    onRefresh={this._onRefresh.bind(this)}
                  />
                }
              >
                { this.getView() }
              </ScrollView>
            </View>
              <MapView
                ref="myMap"
                style={styles.mapContainer}
                showsUserLocation={true}
                followsUserLocation={true}
                provider={ PROVIDER_DEFAULT }
              >
              </MapView>
          </View>
        </View>
      );
  }

}

module.exports = connect(
  (state) => {
    return {
      privateSites: state.privateSites
    };
  })(SitesView);
