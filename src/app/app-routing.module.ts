import { AdminModule } from './modules/admin/admin.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    // canActivate  : [ ModuleGuard ] ,
    loadChildren: () => import('@modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('@modules/public/public.module').then(m => m.PublicModule)
  },
  // {
  //   path         : 'dev' ,
  //    loadChildren : () => import('@modules/public/dev/').then( m => m.DevModule )
  // },
  {
    path: '**',
    redirectTo: 'dev',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
