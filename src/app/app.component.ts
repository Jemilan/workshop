import { Component, OnInit, DoCheck, SimpleChange, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck{
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
      console.log(changes.user);        
    }
 
    ngDoCheck(){
      
    }
  list:any;
  constructor(private httpclient:HttpClient){}

  ngOnInit(): void {
    this.httpclient.get("http://localhost:4200/Menu/savingScheme/parent").subscribe(res=>{
    this.list=res;
    console.log(res)
    });
  }
  user;
  title = 'Minimum Viable Product';
  logoPath='./assets/logo.png';
  addUser(){
    console.log(this.user)
  }
  search="";
}
