import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../models/card/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public card: Card;
  @Output() public clicked: EventEmitter<Card>;
  constructor() {
    this.clicked = new EventEmitter();
  }

  public ngOnInit(): void {}

  public goToDetail(): void {
    this.clicked.emit(this.card);
  }
}
