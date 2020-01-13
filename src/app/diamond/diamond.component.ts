import { Component, OnInit, ViewChild } from '@angular/core';;
import { photoservice } from '../services/photo.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.css']
})
export class DiamondComponent implements OnInit {

  source;
  pic
  constructor(private photos: photoservice) { }
 
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.photos.getAllProducts().subscribe(response => {
      this.source = response;
      this.pic = new MatTableDataSource(this.source);
      this.pic.paginator = this.paginator;
    });


  }

  localdata = ["title"];

}





// import { Component } from '@angular/core';



// const ELEMENT_DATA= [
//   { force: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { force: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { force: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { force: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { force: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { force: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { force: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { force: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { force: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { force: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

// /**
//  * @title Basic use of `<table mat-table>`
//  */
// @Component({
//   selector: 'app-diamond',
//   templateUrl: './diamond.component.html',
//   styleUrls: ['./diamond.component.css']
// })
// export class DiamondComponent {
//   displayedColumns: string[] = ['force', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// }
