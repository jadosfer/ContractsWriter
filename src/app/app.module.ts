import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractsComponent } from './contracts/contracts.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';
import { ViviendaComponent } from './contracts/vivienda/vivienda.component';
import { AutomotorComponent } from './contracts/automotor/automotor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Vivienda2Component } from './contracts/vivienda/vivienda2/vivienda2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractsComponent,
    PresentationComponent,
    HomeComponent,
    ViviendaComponent,
    AutomotorComponent,
    Vivienda2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
