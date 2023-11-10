import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { AboutComponent } from './about/about.component';
import { MealService } from './meal/meal.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MealListComponent, MealDetailComponent, AboutComponent],
  providers: [MealService],
})
export class FeaturesModule {}
