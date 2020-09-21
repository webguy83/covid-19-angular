import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICovidData } from "../interfaces";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getCountries() {
    return this.httpClient.get<ICovidData>(
      "https://api.covid19api.com/summary",
    );
  }
}
