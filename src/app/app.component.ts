import { Component, computed, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonBigComponent } from './components/pokemon-big/pokemon-big.component';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchPokemonComponent, PokemonListComponent, PokemonBigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pokemonService = inject(PokemonService);
  bigPokemonOpened = computed(() => this.pokemonService.bigPokemonOpened());
  
}
