import { AppRoutingModule, driveRoutingComponents} from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [driveRoutingComponents],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule,
  ]
})
export class DriveModule { }

