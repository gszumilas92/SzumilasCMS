import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Components } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  data: Components[];
  
  constructor (private components:AppService) {}


  GetMyData() {
    // this.data2 = this.components.getDataFromApi();
    // console.log(this.data2);
    this.components.getDataFromApi().then(data => this.data = data);
    console.log(this.data);
  }

  ngOnInit() {
    this.GetMyData();
  }


}
