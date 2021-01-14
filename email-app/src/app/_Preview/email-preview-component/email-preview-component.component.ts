import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService, Messages } from 'src/app/service/rest.service';

@Component({
  selector: 'app-email-preview-component',
  templateUrl: './email-preview-component.component.html',
  styleUrls: ['./email-preview-component.component.css'],
})
export class EmailPreviewComponentComponent implements OnInit {
  constructor(private data: RestService, private route: ActivatedRoute) {}
  public mailFolder:any;
  datas:Messages[]=[]
  folder = ['inbox', 'finance', 'travel', 'personal', 'spam', 'drafts', 'sent'];
  
  ngOnInit(): void {
    this.datas = this.data.getData();
    let preFolder = this.route.snapshot.paramMap.get('id');
    this.mailFolder=preFolder;
    
    
  }
}
