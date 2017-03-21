import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//Models
import { Character } from '../../models/character';

//Pages
import {CharacterDetailPage } from '../character-detail/character-detail';

//Providers
import {  MarvelCharacters } from '../../providers/marvel-characters';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  characters: Character[]

  constructor(public navCtrl: NavController, private marvelCharacters: MarvelCharacters) {
    marvelCharacters.gerCharacters().subscribe(characters => {
      this.characters = characters
    })
  }

  goToDetails(id: number) {
    this.navCtrl.push(CharacterDetailPage, {id});
  }
}
