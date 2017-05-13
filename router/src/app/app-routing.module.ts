import { NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Code404Component} from "./code404/code404.component";

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
    // children: []
  },
  {
    path:'product',
    component:ProductComponent
  },
  /*路由的通配符配置*/
  {
    path:'**',
    component:Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
