import store from '@/store';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {},
})
export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number } | null = null;

  placeChanged(place: any) {
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    console.log(this.selectedPlace);
    // method 1 : saving the latest values to store
    // later to be used in weather-forecast component file
    store.commit('setSelectedCity', this.selectedPlace);
    // method 2 : emitting the latest value to be used in weather-forecast component file
    this.$emit('setSelectedCity', this.selectedPlace);
  }


}