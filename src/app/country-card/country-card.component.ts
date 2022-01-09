import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-country',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})

export class CountryCardComponent {
  @Input() country: object;

}
