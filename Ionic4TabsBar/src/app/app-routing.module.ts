import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'lista/:id',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  //{ path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  //{ path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
