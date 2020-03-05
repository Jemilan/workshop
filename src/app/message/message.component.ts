import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }
  title="GRD Jwellery"
  @Input()
  message:string;
  ngOnInit() {
    console.log(this.title);
  }

}
