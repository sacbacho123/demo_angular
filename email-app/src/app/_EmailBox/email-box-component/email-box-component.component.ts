import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestService, Messages } from 'src/app/service/rest.service';

@Component({
  selector: 'app-email-box-component',
  templateUrl: './email-box-component.component.html',
  styleUrls: ['./email-box-component.component.css'],
})
export class EmailBoxComponentComponent implements OnInit, OnDestroy {
  datas: Messages[];
  constructor(data: RestService) {
    this.datas = data.getData();
  }

  folder = ['inbox', 'finance', 'travel', 'personal', 'spam', 'drafts', 'sent'];

  ngOnInit(): void {}
  ngOnDestroy() {
    console.log('b');
  }
}
