import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-card',
  templateUrl: './greeting-card.component.html',
  styleUrls: ['./greeting-card.component.scss'],
})
export class GreetingCardComponent implements OnInit {
  @Input() cardTitle: string = '';
  @Input() cardImgUrl: string = '';
  @Input() cardText: string = '';

  ngOnInit(): void {}
}
 