import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsdPage } from './asd.page';

const routes: Routes = [
  {
    path: '',
    component: AsdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsdPageRoutingModule {}
