import WeatherService from '@/services/weather-service.service';
import store from '@/store';
import { Options, Vue } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';

@Options({
  props: ['selectedCity']
})
export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;
  city: any | undefined;

  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    
    this.city = store.getters.getSelectedCity;
    console.log(this.city);

    // Trying to access the component property "selected city" that should have
    // latest latitude and longitude selection values passed from parent home component
    // console.log(this.selectedCity);
  
    this.weatherService.getWeatherForecast(52.52, 13.419998).then((res) => {
      console.log(res);
    });
    
  }

}


