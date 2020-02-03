import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ControlPanelComponent } from "./control-panel/control-panel.component";
import { FoodGridComponent } from "./food-grid/food-grid.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
//
import { MatButtonModule } from "@angular/material/button";
import { FoodItemComponent } from './food-item/food-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    FoodGridComponent,
    HomeComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: "", component: HomeComponent }]),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
