import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FaqComponent} from './components/faq/faq.component';
import {NgStyle} from '@angular/common';
import {BudgetCardComponent} from './components/budget-card/budget-card.component';
import {FooterComponent} from './components/footer/footer.component';
import {ServiceCardComponent} from './components/service-card/service-card.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FaqComponent, BudgetCardComponent, FooterComponent, ServiceCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'brandlab';
}
