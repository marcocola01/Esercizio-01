import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Prodotti} from './products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: Prodotti[];
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get<Prodotti[]>('https://3000-beb70a8a-432b-4683-b25f-6a108018229b.ws-eu0.gitpod.io/api/products').subscribe((data:Prodotti[]) => {
        // Read the result field from the JSON response.
        this.results = data['products'];

        console.log(data);
      });
    }
}

