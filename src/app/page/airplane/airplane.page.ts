import { TabPage } from './../tab/tab.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.page.html',
  styleUrls: ['./airplane.page.scss'],
})
export class AirplanePage extends TabPage implements OnInit {
  
  velocidad:number=300;
  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
