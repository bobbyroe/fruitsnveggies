import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-food-grid",
  templateUrl: "./food-grid.component.html",
  styleUrls: ["./food-grid.component.css"]
})
export class FoodGridComponent implements OnInit {
  foods: any[];
  constructor() {}

  ngOnInit() {
    this.foods = Array(30).fill(null);
  }

  foodClick(id: number) {
    const randomEmoji = "🤢";
    if (!this.foods[id]) {
      // replace array item at index [idx] with [randomEmoji]
      this.foods.splice(id, 1, randomEmoji);
    }
    console.log(`${id} clicked.`);
  }
}
