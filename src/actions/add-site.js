module.exports.clearForm = () => {
  return {
    type: 'ADD_SITE_CLEAR'
  }
}

module.exports.changeSiteFormData = (key, value) => {
  return {
    type: 'ADD_SITE_CHANGE_FORM_DATA',
    data: {
      key: key,
      value: value
    }
  }
}
