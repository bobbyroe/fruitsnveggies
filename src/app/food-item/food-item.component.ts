import { Component, Input } from "@angular/core";

interface FoodItem {
  name: string;
  seasons: string[];
  emoji: string;
}

@Component({
  selector: "app-food-item",
  template: `
    <button *ngIf="!food">X</button>
    <button *ngIf="food">{{ food.emoji }}</button>
    <span>{{ food.name }}</span>
  `,
  styles: [
    `
      button {
        display: block;
        margin: 0 auto;
        font-size: 5vmax;
        border: 0;
        background: none;
      }
      button:hover {
        background-color: #ffffff;
      }
      span {
        display: block;
        width: 100%;
        font-size: 1rem;
        text-align: center;
      }
    `
  ]
})
export class FoodItemComponent {
  @Input() food: FoodItem;
  constructor() {}
  onClick() {
    console.log("click");
  }
}
