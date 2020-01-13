import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { MenuComponent } from "./menu/menu.component";
import { DiamondComponent } from './diamond/diamond.component';
import { SilverComponent } from './silver/silver.component';
import { ProductComponent } from './product/product.component';
import { GoldComponent } from './gold/gold.component';
const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  { path: 'Register', component: RegisterComponent },
  {
    path: 'Menu', component: MenuComponent, children: [{
      path: "Products", component: ProductComponent, children: [{
        path: 'diamond', component: DiamondComponent
      },
      { path: "gold", component: GoldComponent },
      { path: 'silver', component: SilverComponent }]
    }]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
