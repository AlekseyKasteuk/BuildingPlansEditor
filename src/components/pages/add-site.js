import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import AddSiteNavBar from '../navbars/add-site-navbar'

const defaultPageStyles = require('../../styles/default-page');
const styles = StyleSheet.create({

});

class AddSite extends Component {

  render () {
      return (
        <View style={ defaultPageStyles.popupContainer }>
          <AddSiteNavBar />
          <View>
            <Text>Add site page</Text>
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
  })(AddSite);
