import { Component, inject, signal } from '@angular/core';
import { PokemonSmallComponent } from '../pokemon-small/pokemon-small.component';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonSmallComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
pokemonService = inject(PokemonService);
pokemonList = signal(this.pokemonService.pokemonList);

}
