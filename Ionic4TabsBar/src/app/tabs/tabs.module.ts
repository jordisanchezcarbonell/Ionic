import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
        { path: 'tab1', loadChildren: '../tab1/tab1.module#Tab1PageModule' },
        { path: 'tab2', loadChildren: '../tab2/tab2.module#Tab2PageModule' },
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/tab1',
    pathMatch:'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
