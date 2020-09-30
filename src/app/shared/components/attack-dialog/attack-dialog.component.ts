import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { Attack } from '../../models/attack/attack.model';
import { PokemonsStateData } from '../../models/pokemons/pokemons.model';

@Component({
  selector: 'app-attack-dialog',
  templateUrl: './attack-dialog.component.html',
  styleUrls: ['./attack-dialog.component.scss'],
})
export class AttackDialogComponent implements OnInit, OnDestroy {
  public attackDetail: Attack;
  private mySubs: Subscription;

  constructor(public store: Store) {
    this.mySubs = new Subscription();
    this.mySubs.add(this.getCardsSubscription());
  }

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.mySubs.unsubscribe();
  }

  private getCardsSubscription(): Subscription {
    return this.store
      .select((state) => state.pokeDB)
      .subscribe((cards: PokemonsStateData) => {
        if (cards?.attackDetail) {
          this.attackDetail = cards.attackDetail;
        }
      });
  }
}
