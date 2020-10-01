import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import {
  PokemonData,
  PokemonsStateData,
} from '../../models/pokemons/pokemons.model';

import { PokemonsService } from './pokemons.service';

const cardsMock = {
  cards: [
    {
      id: 'xy7-10',
      name: 'Vespiquen',
      nationalPokedexNumber: 416,
      imageUrl: 'https://images.pokemontcg.io/xy7/10.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy7/10_hires.png',
      types: ['Grass'],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Combee',
      hp: '90',
      number: '10',
      artist: 'kawayoo',
      rarity: 'Uncommon',
      series: 'XY',
      set: 'Ancient Origins',
      setCode: 'xy7',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Intelligence Gathering',
          text: 'You may draw cards until you have 6 cards in your hand.',
          damage: '10',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Colorless', 'Colorless'],
          name: 'Bee Revenge',
          text:
            'This attack does 10 more damage for each Pokémon in your discard pile.',
          damage: '20+',
          convertedEnergyCost: 2,
        },
      ],
      weaknesses: [{ type: 'Fire', value: '×2' }],
    },
    {
      id: 'dp6-90',
      name: 'Cubone',
      nationalPokedexNumber: 104,
      imageUrl: 'https://images.pokemontcg.io/dp6/90.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/dp6/90_hires.png',
      types: ['Fighting'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '90',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Diamond & Pearl',
      set: 'Legends Awakened',
      setCode: 'dp6',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Headbutt',
          text: '',
          damage: '10',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Fighting', 'Colorless'],
          name: 'Bonemerang',
          text:
            'Flip 2 coins. This attack does 20 damage times the number of heads.',
          damage: '20×',
          convertedEnergyCost: 2,
        },
      ],
      resistances: [{ type: 'Lightning', value: '-20' }],
      weaknesses: [{ type: 'Water', value: '+10' }],
    },
  ],
};
const cardDetailMock = {
  card: {
    id: 'dp6-90',
    name: 'Cubone',
    nationalPokedexNumber: 104,
    imageUrl: 'https://images.pokemontcg.io/dp6/90.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/dp6/90_hires.png',
    types: ['Fighting'],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    number: '90',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'Diamond & Pearl',
    set: 'Legends Awakened',
    setCode: 'dp6',
    attacks: [
      {
        cost: ['Colorless'],
        name: 'Headbutt',
        text: '',
        damage: '10',
        convertedEnergyCost: 1,
      },
      {
        cost: ['Fighting', 'Colorless'],
        name: 'Bonemerang',
        text:
          'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2,
      },
    ],
    resistances: [{ type: 'Lightning', value: '-20' }],
    weaknesses: [{ type: 'Water', value: '+10' }],
  },
};

describe('PokemonsService', () => {
  let service: PokemonsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getList and return a list of cards', () => {
    service.getList().subscribe((response: PokemonsStateData) => {
      expect(response).not.toBe(null);
      expect(JSON.stringify(response.pokemons.length)).toBeGreaterThan(0);
    });

    const req = httpTestingController.expectOne(
      environment.apiUrl + environment.apiCardsEndpoint
    );

    req.flush(cardsMock);
  });

  it('should call getCardDetail with this id dp6-90 and return the respective card', () => {
    service.getCardDetail('dp6-90').subscribe((pokemon: PokemonData) => {
      expect(pokemon).not.toBe(null);
      expect(pokemon.id).toEqual('dp6-90');
    });

    const req = httpTestingController.expectOne(
      environment.apiUrl + environment.apiCardsEndpoint + '/dp6-90'
    );

    req.flush(cardDetailMock);
  });
});
