import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'core',
    loadChildren: 'app/core/core.module#CoreModule'
  },
  {
    path: '',
    redirectTo: 'core',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
