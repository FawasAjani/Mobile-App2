import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
  imports: [IonicModule], // Add IonicModule here
})
export class CalenderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}