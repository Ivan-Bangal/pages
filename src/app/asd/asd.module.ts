import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsdPageRoutingModule } from './asd-routing.module';

import { AsdPage } from './asd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsdPageRoutingModule
  ],
  declarations: [AsdPage]
})
export class AsdPageModule {}
