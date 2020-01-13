import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menuservice";
import {MenuItem} from 'primeng/api';   
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 private data:any;
  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.data=this.menuService.getMenuData();
  }

}
