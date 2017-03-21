import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private alertCtrl: AlertController, public navParams: NavParams, private marvelCharacters: MarvelCharacters) {
    let loading = this.createLoader();
    loading.present();

    this.id = navParams.get('id');
    marvelCharacters.gerCharacter(this.id).subscribe(character => {
      this.character = character;
      loading.dismiss();
    },
    err => {
        // Log errors if any
        loading.dismiss();
        let alert = this.createAlert("Error", err, ['Close']);
        alert.present();
    })
  }

  createLoader(msg: string = "Please wait...") : any { 
    return this.loadingCtrl.create({
      content: msg
    });
  }

  createAlert(title: string = "Error", subTitle: string = "Error...", buttons: Array<String>) : any {
    return this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: buttons
    });
  }
}
