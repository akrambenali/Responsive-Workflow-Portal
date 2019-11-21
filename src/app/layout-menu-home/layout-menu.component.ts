import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-menu-home',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.scss']
})
export class LayoutHomeMenuComponent implements OnInit {
  status = false;
  clickEvent() {
    this.status = !this.status;
  }
  constructor() { }

  ngOnInit() {
  }

}
