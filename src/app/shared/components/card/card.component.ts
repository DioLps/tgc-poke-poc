import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonData } from '../../models/pokemons/pokemons.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public card: PokemonData;
  @Output() public clicked: EventEmitter<PokemonData>;
  constructor() {
    this.clicked = new EventEmitter();
  }

  public ngOnInit(): void {}

  public goToDetail(): void {
    this.clicked.emit(this.card);
  }
}
