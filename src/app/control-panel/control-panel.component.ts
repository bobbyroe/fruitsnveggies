import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.css"]
})
export class ControlPanelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  seasonChange({ target }) {
    const val = target.textContent.toLowerCase();
    console.log(val);
  }
}
