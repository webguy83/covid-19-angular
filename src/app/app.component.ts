import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";
import { ICountry } from "./interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "COVID-19";
  countries: ICountry[] = [];
  modifiedCountries: ICountry[] = [];
  countryInput = "";

  constructor(private dataService: DataService) {}

  onCountryChange(e: KeyboardEvent) {
    if (this.countryInput !== (e.target as HTMLInputElement).value) {
      this.countryInput = (e.target as HTMLInputElement).value;

      this.modifiedCountries = this.filterCountries(
        this.countries,
        this.countryInput,
      );
    }
  }

  filterCountries(countries: ICountry[], userInput: string) {
    return countries.filter((country) => {
      return country.Country.substring(0, userInput.length).toLowerCase() ===
        userInput.toLowerCase();
    });
  }

  ngOnInit() {
    this.dataService.getCountries().subscribe(({ Countries }) => {
      this.countries = Countries.sort((a: ICountry, b: ICountry) => {
        return b.TotalConfirmed - a.TotalConfirmed;
      });
      this.modifiedCountries = this.countries;
    });
  }
}
