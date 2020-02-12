import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ControlPanelComponent } from "./control-panel/control-panel.component";
import { FoodGridComponent } from "./food-grid/food-grid.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { FoodItemComponent } from "./food-item/food-item.component";
// Material Components
import {
  MatButtonToggleModule,
  MatSliderModule,
  MatButtonModule
} from "@angular/material";
import { IntroComponent } from "./intro/intro.component";
@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    FoodGridComponent,
    HomeComponent,
    FoodItemComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: IntroComponent },
      { path: "home", component: HomeComponent }
    ]),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
