import { Component } from '@angular/core';
import users from './_files/users.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-table';
  SortbyParam = '';

  public usersList: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    birthday: Date;
    salary: number;
    phone: string;
  }[] = users;


  // public sortName:{
  //   id,
  //   firstName,
  //   lastName,
  //   email,
  //   gender,
  //   birthday,
  //   salary,
  //   phone
  // };
}
