import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  menuWidth = 0;
  isScroll = false;

  openNav() {
  // document.getElementById("mySidenav").style.width = "250px";
  this.menuWidth = 300;
  this.isScroll = false;
}

  closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    this.menuWidth = 0;
   // document.getElementsByClassName("content-view-wrap")[0].scrollTo()
  }

 scroll(el: HTMLElement) {
   this.closeNav();
   debugger;
    el.scrollIntoView();
    this.isScroll = true;
}
}
