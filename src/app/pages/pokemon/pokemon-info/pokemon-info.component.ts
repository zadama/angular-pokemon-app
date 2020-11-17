import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '../../../services/pokemon/pokemon.service';
@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})

// Check if User is logged in. If he/she isn't, redirect to login page.
// If logged in, show a specific Pokemon together with its stats, by
// accessing path variable in this page. Ex: /{id}.
export class PokemonInfoComponent implements OnInit {
  private pokemonId: number = 0;

  // instead of any, use pokemon info model
  public pokemonDetails: any = {};

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));
  }

  async displayPokemonStats() {
    try {
      this.pokemonDetails = await this.pokemonService.getPokemonById(
        this.pokemonId
      );

      console.log(this.pokemonDetails);
    } catch (error) {}
  }

  ngOnInit(): void {
    this.displayPokemonStats();
  }
}
