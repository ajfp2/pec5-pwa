import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ProductCardDto } from '../../models/product-card.dto';
import { CategoryDTO } from '../../../Category/models/category.dto';

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

  @Input() item: ProductCardDto = {
    id: '',
    title: '',
    slug: '',
    price: 0,
    description: '',
    category: new CategoryDTO('', '', ''),
    creationAt: new Date(),
    images: []
  };
  @Input() img: string = '';

}
