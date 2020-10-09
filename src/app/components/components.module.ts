import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import { CarouselComponent } from './carousel/carousel.component';
import {ToastModule} from 'primeng/toast';
import {CarouselModule} from 'primeng/carousel';
import { DrivenavComponent } from './drivenav/drivenav.component';



@NgModule({
  declarations: [NavbarComponent, ToolbarComponent, CarouselComponent, DrivenavComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    ToastModule,
    CarouselModule,
  ],
  exports: [
    NavbarComponent,
    ToolbarComponent,
    CarouselComponent,
    DrivenavComponent,
  ]
})
export class ComponentsModule { }
