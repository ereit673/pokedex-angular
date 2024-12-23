import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonBigComponent } from './components/pokemon-big/pokemon-big.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SearchPokemonComponent, PokemonListComponent, PokemonBigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokedex';
}
