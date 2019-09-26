import {Component, OnInit} from '@angular/core';
import {ServicesService} from './services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor( private router: Router) {
  }
}
