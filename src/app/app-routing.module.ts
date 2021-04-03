import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './contracts/contracts.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: 'contracts', component: ContractsComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: '', redirectTo: 'contracts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
