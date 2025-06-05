import {Component, HostListener, input, Input, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterLinkActive} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FaqItem, faqItems} from './faq-item';
import {MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-faq',
  imports: [
    MatExpansionModule,
    MatIcon,
  ],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqItems: FaqItem[] = faqItems;
}
