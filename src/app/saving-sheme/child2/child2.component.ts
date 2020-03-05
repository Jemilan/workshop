import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  @Input()
  customerName:string

  ngOnInit() {
    
  }
  myName2(){
    return "eswar2"
  }
}
