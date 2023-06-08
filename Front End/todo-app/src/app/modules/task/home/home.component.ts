import { Component, OnInit } from '@angular/core';
import { baseUrl } from 'environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userName: any
  imagePath: any

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || null;
    this.imagePath = baseUrl + localStorage.getItem('pic')
  }
}
