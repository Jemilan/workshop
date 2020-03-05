import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { request } from 'http';
import { of } from 'rxjs';
import data from '../power.json' 
@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorsService implements HttpInterceptor{
   URL="http://localhost:4200/Menu/savingScheme/parent";
  intercept(req: HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    if(req.url==this.URL){
      console.log("intercepting...");
      
      return of(new HttpResponse({status:200,body:data}));
    }

  }
constructor(private injector:Injector){}
}