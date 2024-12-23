import { Component, input, signal } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-small',
  imports: [],
  templateUrl: './pokemon-small.component.html',
  styleUrl: './pokemon-small.component.scss'
})

export class PokemonSmallComponent {
pokemon = input.required<Pokemon>();

}
