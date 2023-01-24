import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenButtonComponent } from './green-button/green-button.component';
import { GreetingCardComponent } from './card/greeting-card/greeting-card.component';



@NgModule({
  declarations: [
    GreenButtonComponent,
    GreetingCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentLibraryModule { }
