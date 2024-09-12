import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  constructor() { }

  readonly baseUrl = environment.apiUrl;

  async getAllHousingLocations(): Promise<any> {
    let result = await(axios.get(this.baseUrl + "/api/house")
      .then(result => {
        return result.data
      })
      .catch(e => console.log(e)))

    return result;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return undefined;
  }
}

export class HousingLocation {
  id!: number;
  name!: string;
  city!: string;
  state!: string;
  photo!: string;
  availableUnits!: number;
  wifi!: boolean;
  laundry!: boolean;
}
