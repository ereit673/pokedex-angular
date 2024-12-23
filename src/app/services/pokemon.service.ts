import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonList: Pokemon[] = [
    {
      name: 'Pikachu',
      imgPath: '/pokemon.webp',
      id: '001',
    },
    {
      name: 'Pikachu2',
      imgPath: '/pokemon.webp',
      id: '002',
    },
    {
      name: 'Pikachu3',
      imgPath: '/pokemon.webp',
      id: '003',
    },
    {
      name: 'Pikachu4',
      imgPath: '/pokemon.webp',
      id: '004',
    },
    {
      name: 'Pikachu5',
      imgPath: '/pokemon.webp',
      id: '005',
    },
    {
      name: 'Pikachu6',
      imgPath: '/pokemon.webp',
      id: '006',
    },
    {
      name: 'Pikachu7',
      imgPath: '/pokemon.webp',
      id: '007',
    },
    {
      name: 'Pikachu8',
      imgPath: '/pokemon.webp',
      id: '008',
    },
  ];

  constructor() {}
}
