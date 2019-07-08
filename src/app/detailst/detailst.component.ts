import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detailst',
  templateUrl: './detailst.component.html',
  styleUrls: ['./detailst.component.scss']
})
export class DetailstComponent implements OnInit {

  constructor() { }
  @Input() mes1:any=[];

  ngOnInit() {
  }

}
