import { Component, Input } from "@angular/core";

@Component({
  selector: "app-food-item",
  template: `
    <button *ngIf="!food">X</button>
    <button *ngIf="food">{{ food }}</button>
  `,
  styles: [
    `
      button {
        font-size: 5rem;
        border: 0;
        align-self: center;
        justify-self: center;
      }
    `
  ]
})
export class FoodItemComponent {
  @Input() food: string = "X";
  constructor() {}
}
