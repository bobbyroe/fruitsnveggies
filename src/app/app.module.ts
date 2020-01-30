import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ControlPanelComponent } from "./control-panel/control-panel.component";
import { FoodGridComponent } from "./food-grid/food-grid.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, ControlPanelComponent, FoodGridComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: "", component: FoodGridComponent }]),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
