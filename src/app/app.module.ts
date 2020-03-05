import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
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
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule,MatTableModule,MatPaginatorModule, MatSelectModule} from "@angular/material";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { DiamondComponent } from './diamond/diamond.component';
import { SilverComponent } from './silver/silver.component';
import { ProductComponent } from './product/product.component';
import { GoldComponent } from './gold/gold.component';
import { SavingShemeComponent } from './saving-sheme/saving-sheme.component';
import { ChildComponent } from './saving-sheme/child/child.component';
import { ParentComponent } from './saving-sheme/parent/parent.component';
import { Child2Component } from './saving-sheme/child2/child2.component';
import {ReuseablesampleComponent} from "internalrepository";
import { MessageComponent } from './message/message.component';
import {createCustomElement} from '@angular/elements';
import { AuthInterceptorsService } from './interceptors/auth-interceptors.service';
import { RegisterComponent } from './register/register.component';
import { CustompipePipe } from './custompipe.pipe';
import {ChartModule} from 'primeng/chart'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    DiamondComponent,
    SilverComponent,
    ProductComponent,
    GoldComponent,
    SavingShemeComponent,
    ChildComponent,ParentComponent, Child2Component,
    ReuseablesampleComponent,
    MessageComponent,RegisterComponent,CustompipePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    MatCardModule,MatTableModule,
    MatSelectModule,ChartModule
  ],
  providers: [MenuService,UserService,AuthService],
  // ,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorsService,multi:true}
  bootstrap: [AppComponent],
  entryComponents:[MessageComponent]
})
export class AppModule {
  constructor(private injector:Injector){
    const customElement=createCustomElement(MessageComponent,{injector});
    customElements.define('app-message',customElement);
  }

 }
