import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { CardComponent } from '../shared/components/card/card.component';
import { PokemonData } from '../shared/models/pokemons/pokemons.model';
import { PokemonsState } from '../shared/store/pokemons.state';

import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let store: Store;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent, CardComponent],
      imports: [
        MatDialogModule,
        NgxsModule.forRoot([PokemonsState]),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    store = TestBed.inject(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dispatch', () => {
    const storeSpy = spyOn(store, 'dispatch');
    component.goToDetails({ id: 'dp6-90' } as PokemonData);
    expect(storeSpy).toHaveBeenCalled();
  });
});
