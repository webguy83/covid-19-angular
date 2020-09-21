import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  code: string;
  @Input()
  totalConfirmed: number;
  @Input()
  totalDeaths: number;
  @Input()
  totalRecovered: number;

  deathPercent: number = 0;

  getDeathPercent(
    deathTotal: number,
    totalConfirmed: number,
  ): number {
    const num = (deathTotal / totalConfirmed) * 100;
    if (isNaN(num)) {
      return 0;
    }
    return Math.round(num * 10) / 10;
  }

  constructor() {}

  ngOnInit(): void {
    this.deathPercent = this.getDeathPercent(
      this.totalDeaths,
      this.totalConfirmed,
    );
  }
}
