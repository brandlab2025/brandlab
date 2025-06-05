import {Component, HostListener, input, Input, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterLinkActive} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NgClass, NgForOf} from '@angular/common';

export interface ServiceCardProps {
  imageAlt: string,
  imageSrc: string,
  text: string,
  text1: string,
  text2: string,
}

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
  props = input.required<any>();
}
