const initialState = {
  data: {
    image: 'default_building',
    title: '',
    description: '',
    address: ''
  }
}
module.exports = (state = {...initialState}, action) => {
  switch (action.type) {
    case 'ADD_SITE_CLEAR': {
      console.log('Start State:', state);
      return {...initialState}
    }
    case 'ADD_SITE_CHANGE_FORM_DATA': {
      let newState = {...state};
      newState.data[action.data.key] = action.data.value;
      return newState;
    }
  }
  return {...state}
}
