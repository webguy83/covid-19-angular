import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "addcomma",
})
export class AddcommaPipe implements PipeTransform {
  transform(value: string): string {
    let counter = 0;
    for (let i = value.length - 1; i >= 0; i--) {
      counter++;
      if (counter % 3 === 0 && i !== 0) {
        value = `${value.slice(0, i)},${value.slice(i)}`;
      }
    }
    return value;
  }
}
