import { AppRoutingModule, driveRoutingComponents } from './../app-routing.module';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { CatalogoComponent } from './catalogo/catalogo.component';

import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { BuscarproductoPipe } from './catalogo/pipes/buscarproducto.pipe';


@NgModule({
  declarations: [HomeComponent, CatalogoComponent, BuscarproductoPipe, driveRoutingComponents],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    DataViewModule,
    ButtonModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    ComponentsModule,
  ],
  exports: [
    CatalogoComponent,
  ]
})
export class PagesModule { }