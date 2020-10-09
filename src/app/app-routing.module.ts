import { TabletComponent } from './drive/tablet/tablet.component';
import { AllinoneComponent } from './drive/allinone/allinone.component';
import { LaptopComponent } from './drive/laptop/laptop.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent}, // re-dirección a home
  // {path:'**', pathMatch:'full', redirectTo:'home'}, //re-dirección de cualquier otra pagina asia home
  
  {path:'catalogo', component: CatalogoComponent},

  // provisional ruts de drive
  {path:'',redirectTo:'laptop', pathMatch:'full'},
  {path:'laptop', component: LaptopComponent},
  {path:'allinone', component: AllinoneComponent},
  {path:'tablet', component:TabletComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// creamos una variable para guardar los componentes y exportar solo la variable y evitar exportar cada componente por separado
export const driveRoutingComponents = [
  AllinoneComponent,
  LaptopComponent,
  TabletComponent,
];
