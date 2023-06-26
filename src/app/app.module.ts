import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IniCioComponent } from './components/ini-cio/ini-cio.component';
import { MedalloComponent } from "./components/medallo/medallo.component";
import { DescubreMasComponent } from './components/descubre-mas/descubre-mas.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarProductosComponent,
    RegistrateComponent,
    NavbarComponent,
    IniCioComponent,
    MedalloComponent,
    DescubreMasComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
