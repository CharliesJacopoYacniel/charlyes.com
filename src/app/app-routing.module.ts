import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: '/', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //       // path: '',
    //       // loadChildren: 'pages/home/home.module#HomeModule'
    //   },
    //  ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
