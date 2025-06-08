import {Component, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgClass,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('navbarArea') navbarArea: any;
  menuItems = [{id: '#services', name: 'SERVIÇOS', isActive: false}, {id: '#faqs', name: 'FAQS', isActive: false}];
  activeUrl: string = '';
  toggler = false;
  isSticky = true;

  private observer: IntersectionObserver | undefined;

  constructor() {
    this.onScroll();
  }

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const foundItem = this.menuItems.find(item => item.id === `#${entry.target.id}`);
          if (foundItem) {
            foundItem.isActive = entry.isIntersecting;
          }
        });
      },
      {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5
      }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
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
