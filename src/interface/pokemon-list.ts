export interface PokemonList {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  name: string;
  url:  string;
  id?: string;
}

export interface CurrentPage {
  CurrentPage: number;
}