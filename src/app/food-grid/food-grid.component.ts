import { Component, OnInit } from "@angular/core";
import { FoodService } from "../food.service";

@Component({
  selector: "app-food-grid",
  templateUrl: "./food-grid.component.html",
  styleUrls: ["./food-grid.component.css"]
})
export class FoodGridComponent implements OnInit {
  foods;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foods = this.foodService.getFoods();
  }

  foodClick(id: number) {
    // const randomEmoji = "🤢";
    // if (!this.foods[id]) {
    //   // replace array item at index [idx] with [randomEmoji]
    //   this.foods.splice(id, 1, randomEmoji);
    // }
    console.log(`${id} clicked.`);
  }
}
