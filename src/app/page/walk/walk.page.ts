import { TabPage } from './../tab/tab.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk',
  templateUrl: './walk.page.html',
  styleUrls: ['./walk.page.scss'],
})
export class WalkPage extends TabPage implements OnInit {
 
  velocidad:number=5;
  
  constructor() { 
    super();
  }
 
  ngOnInit() {
    
  }

}
