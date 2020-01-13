import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MenuService} from "./services/menuservice";
import {MenubarModule} from "primeng/menubar";
import {UserService} from "./services/userservice";
import {AuthService} from "./services/authservice";
import {LoginComponent} from "./login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import 'rxjs'
              //api
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule,MatTableModule,MatPaginatorModule} from "@angular/material";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RegisterComponent} from "./register/register.component";
import { DiamondComponent } from './diamond/diamond.component';
import { SilverComponent } from './silver/silver.component';
import { ProductComponent } from './product/product.component';
import { GoldComponent } from './gold/gold.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    DiamondComponent,
    SilverComponent,
    ProductComponent,
    GoldComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
     MenubarModule,
     BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,AccordionModule,
    MatCardModule,MatTableModule
  ],
  providers: [MenuService,UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
