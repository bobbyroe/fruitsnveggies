import { Component, Input } from "@angular/core";

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
        font-size: 4rem;
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
        font-size: 1rem;
        text-align: center;
      }
      span:hover {
        font-color: #0099ff;
      }
    `
  ]
})
export class FoodItemComponent {
  @Input() food: object;
  constructor() {}
  onClick() {
    console.log("click");
  }
}
