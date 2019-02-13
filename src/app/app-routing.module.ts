import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'my-kitchen', loadChildren: './my-kitchen/my-kitchen.module#MyKitchenPageModule' },
  { path: 'my-cleaning', loadChildren: './my-cleaning/my-cleaning.module#MyCleaningPageModule' },
  { path: 'my-shopping', loadChildren: './my-shopping/my-shopping.module#MyShoppingPageModule' },
  { path: 'my-bills', loadChildren: './my-bills/my-bills.module#MyBillsPageModule' },
  { path: 'my-metting', loadChildren: './my-metting/my-metting.module#MyMettingPageModule' },
  { path: 'birthday-calendar', loadChildren: './birthday-calendar/birthday-calendar.module#BirthdayCalendarPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
