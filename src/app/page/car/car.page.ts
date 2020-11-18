import { TabPage } from './../tab/tab.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage extends TabPage implements OnInit {
  velocidad:number=30;
  
  constructor() {
    super();

   }

  ngOnInit() {
  }

}
