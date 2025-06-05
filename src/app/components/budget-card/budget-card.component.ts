import {Component, HostListener, input, Input, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterLinkActive} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-budget-card',
  imports: [],
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent {
}
