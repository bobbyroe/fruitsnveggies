import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  items = [];
  constructor(private http: HttpClient) {}

  getFoods() {
    return this.http.get("assets/FruitsVegetables.json");
  }
}
