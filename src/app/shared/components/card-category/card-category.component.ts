import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { CategoryDTO } from '../../../Category/models/category.dto';
import { CategoryCardDto } from '../../models/category-card.dto';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.scss',
  animations: [
      trigger('hoverState', [
        state('default', style({ transform: 'scale(1)' })),
        state('hovered', style({ transform: 'scale(1.1)' })),
        transition('default <=> hovered', animate('300ms ease-in-out'))
      ])
    ]
})
export class CardCategoryComponent {

    hover = false;
    showButtons = false;
    @Input() item: CategoryCardDto = {
      id: '',
      name: '',
      slug: '',
      image: '',
    };
}
