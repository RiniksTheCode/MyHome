import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BirthdayCalendarPage } from './birthday-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdayCalendarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BirthdayCalendarPage]
})
export class BirthdayCalendarPageModule {}
