import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [
    trigger('hoverState', [
      state('default', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.1)' })),
      transition('default <=> hovered', animate('300ms ease-in-out'))
    ])
  ]
})
export class CardComponent {
  hover = false;
  showButtons = false;
  @Input() item: any = {};
  @Input() img: string = '';

}
