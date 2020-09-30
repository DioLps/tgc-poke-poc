export class GetPokemons {
  static readonly type = '[POKEMONS] Get Pokemons';
  constructor() {}
}

export class GetPokemonDetail {
  static readonly type = '[POKEMONS] Get Pokemon Detail';
  constructor(public id: string) {}
}


export class GetAttackPokemonDetail {
  static readonly type = '[POKEMONS] Get Attack Pokemon Detail';
  constructor(public attackName: string) {}
}
