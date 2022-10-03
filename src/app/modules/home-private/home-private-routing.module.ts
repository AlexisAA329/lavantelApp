import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: 'tarjeta',
    loadChildren:() => import('@modules/tarjeta/tarjeta.module').then(m => m.TarjetaModule),
  },
  {
    path: 'servicios',
    loadChildren:() => import('@modules/servicios/servicios.module').then(m => m.ServiciosModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePrivateRoutingModule { }