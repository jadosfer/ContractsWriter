import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractsComponent } from './contracts/contracts.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';
import { ViviendaComponent } from './contracts/vivienda/vivienda.component';
import { AutomotorComponent } from './contracts/automotor/automotor.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractsComponent,
    PresentationComponent,
    HomeComponent,
    ViviendaComponent,
    AutomotorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
