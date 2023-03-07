import { Options, Vue } from 'vue-class-component';
import SearchCity from '@/components/SearchCity.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';

@Options({
  components: {
    SearchCity,
    WeatherForecast,
  }
})
export default class HomeView extends Vue {
  selectedCity: any | undefined;

  setSelectedCity(city: any) {
    this.selectedCity = city;
    console.log(this.selectedCity);
  }
}