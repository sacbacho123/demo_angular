import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService, Messages } from 'src/app/service/rest.service';

@Component({
  selector: 'app-email-detail-component',
  templateUrl: './email-detail-component.component.html',
  styleUrls: ['./email-detail-component.component.css']
})
export class EmailDetailComponentComponent implements OnInit {

  constructor(private data: RestService, public route: ActivatedRoute) { }

  public mailDetail:any;

  datas:Messages[]=[]
  ngOnInit(): void {
    this.datas = this.data.getData();
    let preFolder = this.route.snapshot.params['id'];
    this.mailDetail=preFolder;
  }

}
