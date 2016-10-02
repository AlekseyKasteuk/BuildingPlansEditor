import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native'
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
    console.log(this.props.privateSites);
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

  render () {
      return (
        <View style={ defaultPageStyles.pageWithStatusBar }>
          <SitesNavBar />
          <View style={ styles.pageContainer }>
            <View style={ styles.sitesListWrapper }>
              { this.getView() }
            </View>
            <MapView
              style={ styles.mapContainer }
              showsUserLocation={true}
            />
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
