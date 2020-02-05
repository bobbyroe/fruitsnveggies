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
  season$ = this.seasonFilterBS.asObservable();
  // filter out blank emojis
  foods$ = this.getFoods().pipe(
    map(foods => (foods as any).filter(food => !food.blank))
  );
  filteredFoods$ = combineLatest(this.foods$, this.season$).pipe(
    map(([foods, season]) => {
      const filtered =
        season === "any"
          ? foods
          : (foods as any).filter(
              food => !food.blank && food.seasons.includes(season)
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
}
