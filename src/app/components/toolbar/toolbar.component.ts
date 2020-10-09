import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {label: 'La Tecnológica', icon: '/assets/brand/latecnologica.svg'},
      // {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      // {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      // {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      // {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];
  }
}
