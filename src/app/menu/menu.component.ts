import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  status = false;
  clickEvent() {
    this.status = !this.status;
  }
  constructor() { }

  ngOnInit() {


  }

}
