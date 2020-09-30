import { Attack } from '../attack/attack.model';
import { Resistance } from '../resistance/resistance.model';
import { Weakness } from '../weakness/weakness.model';

export interface PokemonsStateData {
  pokemons: Array<PokemonData>;
  selectedCard?: PokemonData;
  attackDetail?: Attack;
}

export interface PokemonData {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: Array<string>;
  supertype: string;
  subtype: string;
  evolvesFrom: string;
  hp: string;
  retreatCost: Array<string>;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: Array<Attack>;
  resistances?: Array<Resistance>;
  weaknesses: Array<Weakness>;
}
