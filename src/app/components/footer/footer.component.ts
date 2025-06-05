import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() menuData: any;

  constructor() {
  }

  get menuItems() {
    if (this.menuData) {
      return this.menuData.data.data.navigation_menu[0].menu_items;
    }
    return [];
  }

}
