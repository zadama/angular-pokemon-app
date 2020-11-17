import { Injectable } from '@angular/core';

// Save user to localstorage, get user from localstorage &
// get all saved pokemons by user.

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  constructor() {}

  login(): void {}

  isLoggedIn(): boolean {
    return false;
  }

  addPokemonToUser(pokemon): void {}
}
