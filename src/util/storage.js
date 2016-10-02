import reducers from '../reducers'
import { createStore } from 'redux'

const store = createStore(reducers);

class AppStorage {

  getReduxStore () {
    return store;
  }

}

module.exports = new AppStorage();
