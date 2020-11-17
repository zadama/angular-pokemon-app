import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonInfo } from '../../models/pokemon-info.model';

// Get all Pokemons & get individual pokemons by url/id...

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private BASE_URL: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getAllPokemons(): Promise<any> {
    return this.http
      .get(this.BASE_URL + 'pokemon?offset=0&limit=100')
      .toPromise();
  }

  getPokemonById(id: number): Promise<PokemonInfo> {
    return this.http.get(this.BASE_URL + 'pokemon/' + id).toPromise();
  }
}
