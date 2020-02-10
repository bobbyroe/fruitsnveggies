import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  items = [];
  private seasonFilterBS = new BehaviorSubject<string>("any");
  private foodFilterBS = new BehaviorSubject<string>("both");
  season$ = this.seasonFilterBS.asObservable();
  foodFilter$ = this.foodFilterBS.asObservable();
  // filter out blank emojis
  foods$ = this.getFoods().pipe(
    map(foods => (foods as any).filter(food => !food.blank && !food.alt_emoji))
  );
  filteredFoods$ = combineLatest(
    this.foods$,
    this.season$,
    this.foodFilter$
  ).pipe(
    map(([foods, season, foodFilter]) => {
      const filtered =
        season === "any"
          ? foods
          : (foods as any).filter(
              food =>
                !food.blank && !food.alt_emoji && food.seasons.includes(season)
            );
      return filtered;
    })
  );
  constructor(private http: HttpClient) {}

  getFoods() {
    return this.http.get("assets/FruitsVegetables.json");
  }
  setSeason(value) {
    this.seasonFilterBS.next(value);
  }

  setFoodFilter(foodFilter) {
    console.log(foodFilter);
  }
}
