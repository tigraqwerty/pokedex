import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DitailsComponent } from './ditails.component';

const ditailsRoutes: Routes = [
  {
    path: '',
    component: DitailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ditailsRoutes)],
  exports: [RouterModule],
})
export class DitailsRoutingModule {}
