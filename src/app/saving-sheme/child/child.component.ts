import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Output()
  update=new EventEmitter<any>();


  constructor() { 

    
  }
  ngOnInit() {
   
  }

  updateData(){
    this.update.emit("Eswar");
  }

  myName(){
return "eswar";
  }
  

}
