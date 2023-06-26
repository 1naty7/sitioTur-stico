import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { IniCioComponent } from './components/ini-cio/ini-cio.component';
import { MedalloComponent } from './components/medallo/medallo.component';
import { DescubreMasComponent } from './components/descubre-mas/descubre-mas.component';



const routes: Routes = [
  { path: '', component: IniCioComponent},
  { path: 'editarProducto', component: EditarProductosComponent},
  { path: 'editarProducto/id', component: EditarProductosComponent},
  { path: 'registrate', component: RegistrateComponent},
  { path: 'medellín', component: MedalloComponent},
  { path: 'descubre-mas', component: DescubreMasComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
