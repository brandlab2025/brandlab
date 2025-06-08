import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterLinkActive} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgClass,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarArea') navbarArea: any;
  menuItems = ['SERVIÇOS', 'FAQS'];
  activeUrl: string = '';
  toggler = false;
  isSticky = false;

  constructor(private router: Router) {
    this.onScroll();
  }

  ngOnInit(): void {
    this.activeUrl = this.router.url;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeUrl = event.url;
      });
  }

  isActive(url: any) {
    if (url) {
      return url[0] === this.activeUrl;
    }
    return false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.navbarArea) {
      const sticky = this.navbarArea.nativeElement.offsetTop;
      this.isSticky = window.pageYOffset > sticky;
    } else {
      this.isSticky = false;
    }

    const sections = document.querySelectorAll('.page-scroll');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    const de = document.documentElement;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const currLinkHref = currLink.getAttribute('href');
      const val = currLinkHref?.replace('/', '');
      const refElement = document.querySelector(val ?? '');
      if (refElement) {
        const box = refElement.getBoundingClientRect();
        const top = box.top + window.pageYOffset - de.clientTop;

        const scrollTopMinus = scrollPos + 73;

        const h = refElement.getBoundingClientRect().height;

        if (refElement && top <= scrollTopMinus && (top + h > scrollTopMinus)) {
          this.activeUrl = '/' + currLinkHref;
        }
      }
    }
  }

  onTogglerClick() {
    this.toggler = !this.toggler;
  }

  onMenuItemClick() {
    this.toggler = false;
  }

  get isTogglerActive() {
    return this.toggler;
  }

}
