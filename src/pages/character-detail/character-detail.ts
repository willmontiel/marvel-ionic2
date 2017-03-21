import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Models
import { Character } from '../../models/character';

//Providers
import { MarvelCharacters } from '../../providers/marvel-characters';

/*
  Generated class for the CharacterDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-character-detail',
  templateUrl: 'character-detail.html'
})
export class CharacterDetailPage {
  id: number
  character: Character

  constructor(public navCtrl: NavController, public navParams: NavParams, private marvelCharacters: MarvelCharacters) {
    this.id = navParams.get('id');
    marvelCharacters.gerCharacter(this.id).subscribe(character => {
      this.character = character;
    })
  }

}
