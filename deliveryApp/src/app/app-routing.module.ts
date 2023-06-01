import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalle-negocio/:negocioId',
    loadChildren: () => import('./detalle-negocio/detalle-negocio.module').then( m => m.DetalleNegocioPageModule)
  },

  {
    path: 'carritos/:usuarioId',
    loadChildren: () => import('./carritos/carritos.module').then( m => m.CarritosPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'detalles-perfil/:usuarioId',
    loadChildren: () => import('./detalles-perfil/detalles-perfil.module').then( m => m.DetallesPerfilPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
