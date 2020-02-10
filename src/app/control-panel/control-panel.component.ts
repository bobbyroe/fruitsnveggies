import { Component, OnInit } from "@angular/core";
import { FoodService } from "../food.service";

@Component({
  selector: "app-control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.css"]
})
export class ControlPanelComponent implements OnInit {
  filterFood: string = "both";
  constructor(private foodService: FoodService) {}

  ngOnInit() {}

  seasonChange({ target }) {
    const val = target.textContent.toLowerCase();
    this.foodService.setSeason(val);
  }

  filterFoodToggle({ value }) {
    switch (value) {
      case 0:
        this.filterFood = "fruits";
        break;
      case 1:
        this.filterFood = "both";
        break;
      case 2:
        this.filterFood = "vegetables";
        break;
      default:
        console.log("no op.");
    }
    this.foodService.setFoodFilter(this.filterFood);
  }
}
