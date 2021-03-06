import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from '../countries.service';
import { ICountry } from '../country';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.css']
})
export class HomeGridComponent implements OnInit, OnDestroy {
  countries: object[];
  private countryListSubs: Subscription;
  isFetching = false;
  // iCountries: ICountry[] = [];

  constructor(private cService: CountriesService, private http: HttpClient) {
    this.http.get<any>('https://restcountries.com/v3.1/all').toPromise().then(data => {
      this.countries = data;
      // console.log(this.countries);
      let i = 0;
      for(let key in data) {
        if(data.hasOwnProperty(key)){
          console.log(data[key]);
          // this.iCountries[i].cmmnName = data[key].name.common;
          // this.iCountries[i].ntvName = data[key].name.nativeName;
          // this.iCountries[i].pop = data[key].population;
          // this.iCountries[i].region = data[key].region;
          // this.iCountries[i].subRegion = data[key].subregion;
          // this.iCountries[i].capital = data[key].capital;
          // this.iCountries[i].currencies = data[key].currencies;
          // this.iCountries[i].domain = data[key].tld;
          // this.iCountries[i].languages = data[key].languages;
          // this.iCountries[i].borderCountries = data[key].borders;
          // this.iCountries[i].flag = data[key].flags;
          // i++;
        }
      }
    })

  }

  ngOnInit(): void {
    this.countryListSubs = this.cService.countriesChanged.subscribe(
      (countries) => {
        this.countries = countries;
        this.isFetching = false;
      }
      );
      this.isFetching = true;
      this.cService.fetchCountries();
  }

  ngOnDestroy(): void {
    this.countryListSubs.unsubscribe();
  }

}
