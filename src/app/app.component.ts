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
  myObject
  myString

  constructor (private components:AppService) {}

  GetMyData() {
    this.components.getArrayOfDocuments().then(data => {
      this.myObject = data[0];
      this.myString = this.myObject.content;
    });
  }

  ngOnInit() {
    this.GetMyData();
  }

}
