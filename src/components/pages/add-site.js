import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  CameraRoll
} from 'react-native'
import { connect } from 'react-redux'
import AddSiteNavBar from '../navbars/add-site-navbar'
import { clearForm, changeSiteFormData } from '../../actions/add-site'
const defaultPageStyles = require('../../styles/default-page');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  siteAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  formContainer: {
    flex: 1,
    padding: 5
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  formRowLabelContainer: {
    width: 100
  },
  formRowLabel: {
    fontSize: 15
  },
  formRowValueContainer: {
    flex: 1
  },
  formRowValueInputText: {
    flex: 1,
    padding: 5,
    height: 25,
    borderColor: '#ccc',
    borderWidth: 1
  },
  popupFooter: {
    borderTopColor: '#ccc',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  popupFooterButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 3,
    backgroundColor: '#05A5D1'
  },
  popupFooterButtonText: {
    fontSize: 14,
    color: 'white'
  }
});

class AddSite extends Component {

  componentWillMount () {
    this.props.dispatch(clearForm());
    console.log('Add site will mount');
  }

  saveSite () {
    console.log('Save site');
  }

  getNewImage() {
    console.log('Upload new image');
  }

  render () {
      return (
        <View style={ defaultPageStyles.popupContainer }>
          <AddSiteNavBar />
          <View style={ styles.container }>
            <View style={{ padding: 5 }}>
              <TouchableOpacity onPress={ this.getNewImage }>
                <Image
                  source={ { uri: this.props.addSite.data.image } }
                  style={ styles.siteAvatar }
                />
              </TouchableOpacity>
            </View>
            <View style={ styles.formContainer }>
              <View style={ styles.formRow }>
                <View style={ styles.formRowLabelContainer }>
                  <Text style={ styles.formRowLabel }>Title:</Text>
                </View>
                <View style={ styles.formRowValueContainer }>
                  <TextInput value={ this.props.addSite.data.title } onChangeText={(text) => {
                    this.props.dispatch(changeSiteFormData('title', text));
                  }} style={ styles.formRowValueInputText } placeholder="Title" />
                </View>
              </View>
              <View style={ styles.formRow }>
                <View style={ styles.formRowLabelContainer }>
                  <Text style={ styles.formRowLabel }>Address:</Text>
                </View>
                <View style={ styles.formRowValueContainer }>
                  <TextInput value={ this.props.addSite.data.address } onChangeText={(text) => {
                    this.props.dispatch(changeSiteFormData('address', text));
                  }} style={ styles.formRowValueInputText } placeholder="Address" />
                </View>
              </View>
              <View style={ styles.formRow }>
                <View style={ styles.formRowLabelContainer }>
                  <Text style={ styles.formRowLabel }>Description:</Text>
                </View>
                <View style={ styles.formRowValueContainer }>
                  <TextInput value={ this.props.addSite.data.description } multiline={true} onChangeText={(text) => {
                    this.props.dispatch(changeSiteFormData('description', text));
                  }} style={ [styles.formRowValueInputText, {height: 35}] } placeholder="Description" />
                </View>
              </View>
            </View>
          </View>
          <View style={ styles.popupFooter }>
            <TouchableOpacity style={ styles.popupFooterButton } onPress={ this.saveSite } disabled={ !this.props.addSite.data.address || !this.props.addSite.data.address }>
              <Text style={ styles.popupFooterButtonText } >Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
  }

}

module.exports = connect(
  (state) => {
    console.log('Connect state:', state);
    return {
      addSite: state.addSite
    };
  })(AddSite);
