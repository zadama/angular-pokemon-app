import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPokemonsComponent } from './pages/all/all-pokemons.component';
import { PokemonInfoComponent } from './pages/pokemon/pokemon-info/pokemon-info.component';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pokemons', component: AllPokemonsComponent },
  { path: 'pokemons/:id', component: PokemonInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
