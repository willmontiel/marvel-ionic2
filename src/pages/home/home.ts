import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//Models
import { Character } from '../../models/character';

//Pages
import { CharacterDetailPage } from '../character-detail/character-detail';

//Providers
import { MarvelCharacters } from '../../providers/marvel-characters';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  characters: Character[]
  originalsCharacters: Character[]
  offset: number = 0;
  offsetForSearch: number = 0;
  searching: boolean = false;
  query: string = "";

  constructor(public navCtrl: NavController, private marvelCharacters: MarvelCharacters) {
    marvelCharacters.gerCharacters(this.offset).subscribe(characters => {
      this.characters = characters
      this.originalsCharacters = characters;
    },
    err => {
        // Log errors if any
        console.log(err);
        console.log("LALALAAL");
    })
  }

  doInfinite(infiniteScroll) {
    if (!this.searching) {
      this.offset = this.offset + 20;
      this.marvelCharacters.gerCharacters(this.offset).subscribe(characters => {
        for (let i = 0; i < characters.length; i++) {
          this.characters.push(characters[i]);
        }
        infiniteScroll.complete();
      })
    }
    else {
      this.offsetForSearch = this.offsetForSearch + 20;
      this.marvelCharacters.searchCharacters(this.query, this.offsetForSearch).subscribe(characters => {
        for (let i = 0; i < characters.length; i++) {
          this.characters.push(characters[i]);
        }
        infiniteScroll.complete();
      });
    }
  }

  goToDetails(id: number) {
    this.navCtrl.push(CharacterDetailPage, { id });
  }

  search(searchEvent) {
    let val = searchEvent.target.value;
    this.query = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (val && (this.query.trim() === '' || this.query.trim().length < 3)) {
      this.clear();
    } else {
      this.searching = true;
      this.marvelCharacters.searchCharacters(this.query, this.offsetForSearch).subscribe(characters => {
        this.characters = characters
      });
    }
  }

  clear() {
    this.characters = this.originalsCharacters;
    this.searching = false;
    this.offsetForSearch = 0;
    this.query = '';
  }
}
