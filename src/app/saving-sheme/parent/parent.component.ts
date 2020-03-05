import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  @ViewChild(ChildComponent,{static:false})child:ChildComponent
  @ViewChild(Child2Component,{static:false})child2:Child2Component
 constructor() { }
  city:string;
  name="GRD Jwellery"
  ngOnInit() {
  }

display(value){
  alert(value)
this.city=this.city.toUpperCase();
  }


ngAfterViewInit(){
console.log(this.child.myName());
console.log(this.child2.myName2())
}

}
