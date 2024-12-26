import { Component, inject, input, signal } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-small',
  imports: [],
  templateUrl: './pokemon-small.component.html',
  styleUrl: './pokemon-small.component.scss'
})

export class PokemonSmallComponent {
  pokemonService = inject(PokemonService);
pokemon = input.required<Pokemon>();

onSelectPokemon(pokemon: Pokemon){
  this.pokemonService.openPokemon(pokemon);
  console.log(this.pokemonService.bigPokemonOpened());
  
}

}
