import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'clienti',
    loadChildren: () => import('./clienti/clienti.module').then( m => m.ClientiPageModule)
  },
  {
    path: 'commerciante',
    loadChildren: () => import('./commerciante/commerciante.module').then( m => m.CommerciantePageModule)
  },
  {
    path: 'commerciante-modifica-negozio',
    loadChildren: () => import('./commerciante-modifica-negozio/commerciante-modifica-negozio.module').then( m => m.CommercianteModificaNegozioPageModule)
  },
  {
    path: 'commerciante-gestisci-ordini',
    loadChildren: () => import('./commerciante-gestisci-ordini/commerciante-gestisci-ordini.module').then( m => m.CommercianteGestisciOrdiniPageModule)
  },
  {
    path: 'prova-registration',
    loadChildren: () => import('./prova-registration/prova-registration.module').then( m => m.ProvaRegistrationPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
