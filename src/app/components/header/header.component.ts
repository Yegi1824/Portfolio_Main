import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() onChangeSlide: (sName_Slide: string) => void;
  @Input() getActiveSection: () => any;

  bSideMenuOpened = false;

  getIsActiveMenu = (sName_Menu) => {
    if (this.getActiveSection()) {
      return sName_Menu === this.getActiveSection().anchor;
    } else {
      return false;
    }
  }

  onToggleSideMenu = () => {
    this.bSideMenuOpened = !this.bSideMenuOpened;
  }

}
