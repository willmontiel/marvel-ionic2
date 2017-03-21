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
  elements: number = 20;

  constructor(public navCtrl: NavController, private marvelCharacters: MarvelCharacters) {
    marvelCharacters.gerCharacters(this.elements).subscribe(characters => {
      this.characters = characters
    })
  }

  doInfinite(infiniteScroll) {
    this.elements = this.elements + this.elements;
    this.marvelCharacters.gerCharacters(this.elements).subscribe(characters => {
      //this.characters.concat(characters);
      for (let i = 0; i < characters.length; i++) {
        this.characters.push(characters[i]);
      }
      infiniteScroll.complete();
    })
  }

  goToDetails(id: number) {
    this.navCtrl.push(CharacterDetailPage, {id});
  }
}
