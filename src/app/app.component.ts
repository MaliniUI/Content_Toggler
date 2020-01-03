import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  menuWidth = 0;

  openNav() {
  // document.getElementById("mySidenav").style.width = "250px";
  this.menuWidth = 150;
}

  closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    this.menuWidth = 0;
  }
}
