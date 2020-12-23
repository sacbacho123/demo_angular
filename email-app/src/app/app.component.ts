import { Component } from '@angular/core';
import {RestService, Messages} from './service/rest.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-app';
  
  datas: Messages[]
  constructor(data :RestService){
    this.datas= data.getData();
  }
}
