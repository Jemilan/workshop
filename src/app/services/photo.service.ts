import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class photoservice{
    constructor(private httpClient:HttpClient){}
    getAllProducts()
    {
       return this.httpClient.get("https://jsonplaceholder.typicode.com/photos");
    }
} 