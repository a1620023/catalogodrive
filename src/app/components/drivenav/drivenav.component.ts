import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-drivenav',
  templateUrl: './drivenav.component.html',
  styleUrls: ['./drivenav.component.css']
})
export class DrivenavComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Laptops',
        icon: 'pi pi-fw pi-file',
        url: 'laptop',
      },
      {
        label: 'All in One',
        icon: 'pi pi-fw pi-pencil',
        url: 'allinone',
      },
      {
        label: 'Tablets',
        icon: 'pi pi-fw pi-user',
        url: 'tablet',
      },
    ];
    this.activeItem = this.items[1];
  }

}
