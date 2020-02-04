import { Component, OnInit } from "@angular/core";
import { FoodService } from "../food.service";

@Component({
  selector: "app-control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.css"]
})
export class ControlPanelComponent implements OnInit {
  constructor(private foodService: FoodService) {}

  ngOnInit() {}

  seasonChange({ target }) {
    const val = target.textContent.toLowerCase();
    this.foodService.setSeason(val);
  }
}
