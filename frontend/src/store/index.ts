import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedCity: null
  },
  getters: {
    getSelectedCity: state => {
      return state.selectedCity;
    }
  },
  mutations: {
    setSelectedCity(state, selectedPlace) {
      state.selectedCity = selectedPlace;
      console.log(state.selectedCity);
    }
  },
  actions: {
    setSelectedPlace(selectedPlace) {
      console.log('action');
      this.commit('setSelectedCity', selectedPlace)
    }
  },
  modules: {
  }
})
