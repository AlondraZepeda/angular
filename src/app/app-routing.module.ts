import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component:ClientesComponent},
  {path: 'clientes/:clientesId', component:ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
