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
        font-size: 3rem;
        border: 0;
        background: none;
        width: 100%;
        height: 100%;
        /* align-self: center; */
        /* justify-self: center; */
      }
      button:hover {
        background-color: #ffffff;
      }
      span {
        display: block;
        width: 100%;
        margin-top: -1.5rem;
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
