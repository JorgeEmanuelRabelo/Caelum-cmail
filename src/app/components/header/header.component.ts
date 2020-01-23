import { Component } from "@angular/core";

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })


export class HeaderComponent{
    isMenuOpen = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }
}