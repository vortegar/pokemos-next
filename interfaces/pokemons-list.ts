export interface PokemonsListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  smallPokemons[];
}

export interface smallPokemons {
    name:  string;
    url :  string;
    id  :  number;
    img :  string;
}
