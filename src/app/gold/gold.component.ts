import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  full:any;
data:any;
cname=[];
slicedname=[];
population=[];
slicepopulation=[]
  constructor(private httpclient:HttpClient) { 
  
  }

// 

  ngOnInit() {
    this.httpclient.get("https://restcountries.eu/rest/v2/all").subscribe(response=>{
      this.full=response;
      
      this.full.forEach(element => {
        this.cname.push(element.name);
        this.population.push(element.population)
      });
      
      this.slicedname=this.cname.slice(120,127);
      this.slicepopulation=this.population.slice(120,127);
      console.log(this.slicepopulation)
      this.data = {
        labels: this.slicedname,
        datasets: [
            {
              backgroundColor:['#6a0dad','#000000','#ffffff','#fgfhgg','#dfgf54'],

                label: 'First Dataset',
                data: this.slicepopulation
            }
        ]
      }
    });
    
  }


}


