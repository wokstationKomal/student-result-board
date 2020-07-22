import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'Home', 
    loadChildren: () => import('./Components/home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'Form', 
    loadChildren: () => import('./Components/form/form.module').then(m => m.FormModule) 
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
