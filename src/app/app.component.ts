import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sidebarWidth: string = '300px';
  HideText:boolean = true
  isSidebarExpanded: boolean = true;
  toggleSidebar() {
    this.sidebarWidth = this.sidebarWidth === '300px' ? '70px' : '300px';
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
  shownav:string = '0px';

 
  
  }

