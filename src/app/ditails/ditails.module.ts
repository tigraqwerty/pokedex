import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DitailsRoutingModule } from './ditails-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DitailsRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
})
export class DitailsModule {}
