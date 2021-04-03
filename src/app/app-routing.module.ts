import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomotorComponent } from './contracts/automotor/automotor.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ViviendaComponent } from './contracts/vivienda/vivienda.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'vivienda', component: ViviendaComponent },
  { path: 'automotor', component: AutomotorComponent },
  { path: 'presentation', component: PresentationComponent },  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
