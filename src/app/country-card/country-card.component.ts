import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-country',
  templateUrl: './country-card.component.html'
})

export class CountryCardComponent {
  @Input() country: object[];

}
