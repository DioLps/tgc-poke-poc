import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/shared/models/card/card';
import { CardsService } from 'src/app/shared/services/cards/cards.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  public cards: Array<Card>;
  private mySubs: Subscription;
  constructor(private cardServ: CardsService, private router: Router) {
    this.mySubs = new Subscription();
    this.mySubs.add(this.getCardsSubscription());
  }

  public ngOnInit(): void {}

  private getCardsSubscription(): Subscription {
    return this.cardServ.getList().subscribe((cards) => {
      this.cards = cards;
    });
  }

  public ngOnDestroy(): void {
    this.mySubs.unsubscribe();
  }

  public goToDetails(selectedCard: Card): void {
    this.router.navigateByUrl(`detail/${selectedCard.id}`).then((value) => {
      console.log(`value/${value}`);
    });
  }
}
