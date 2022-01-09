import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class CountriesService {
  countriesChanged = new Subject<object[]>();
  countries: object[];

  constructor(private http: HttpClient) {}

  fetchCountries() {
    this.http
      .get<any>('https://restcountries.com/v3.1/all')
      // .pipe(
      //   map((resData) => {
      //     return resData.map((cntry) => cntry.name.common);
      //   })
      // )
      .subscribe((altResData) => {
       console.log(altResData);
        this.countriesChanged.next(altResData);
      });
  }
}

//TODO handling request errors
